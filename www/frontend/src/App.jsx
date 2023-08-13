import React, { useState, useEffect } from "react";
import "./style/App.css";
import Table from "./components/Table";
import InputForm from "./components/InputForm";
import axios from "axios";
import EditForm from "./components/editForm";
function App() {
  //set state
  const [formValue, setFormValue] = useState({
    name: "",
    price: null,
    quantity: null,
    description: "",
  });
  const [openEdit, setOpenEdit] = useState(false);
  const [openInsert, setOpenInsert] = useState(false);
  //informations collect fetchData
  const [informations, setInformations] = useState([]);
  //informEdit collect fetch data item id
  const [informEdit, setInformEdit] = useState([]);
  //Function to handle change in input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  console.log(formValue);

  //Function validation
  const validate = (values) => {
    let er = "";
    if (
      !values.name ||
      !values.price ||
      !values.quantity ||
      !values.description
    ) {
      return (er = "Please fill out this form.");
    }
  };
  //Function to handle submit in input
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate(formValue);
    if (!error) {
      try {
        const response = await axios.post(
          "http://localhost:3000/insert_item",
          formValue
        );
        fetchData();
        closeWinInsert();
      } catch (err) {
        console.log(err);
      }
    }
  };

  //Function fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/get_item");
      setInformations(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  //Function open window for inserting data
  const openWinInsert = (e, id) => {
    setOpenInsert(true);
    fetchDataId(id);
  };
  //Function close window for inserting data
  const closeWinInsert = (e) => {
    setOpenInsert(false);
  };
  //Function fetch data by id
  const fetchDataId = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/get_item_by_id/${id}`
      );
      setInformEdit(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  // Function to handle the edit change
  const handleEdit = (e) => {
    // const { _id, name, price, quantity, description, value } = e.target;
    const { name, value } = e.target;
    setInformEdit({ ...informEdit, [name]: value });
  };

  //Function handle submit edit form
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const error = validate(informEdit);
    if (!error) {
      try {
        const id = informEdit._id;

        const response = await axios.post(
          `http://localhost:3000/update_item/${id}`,
          informEdit
        );
        fetchData();
        closeWinEdit();
      } catch (err) {
        console.log(err);
      }
    }
  };
  //Function open window for editing data
  const openWinEdit = (e, id) => {
    fetchDataId(id);
    setOpenEdit(true);
  };
  //Function close window for editing data
  const closeWinEdit = (e) => {
    setOpenEdit(false);
  };

  return (
    <div className="all-container">
      <div className="add-btn">
        <button onClick={openWinInsert}>Add Item Data</button>
      </div>
      {/* if openInert is true open window for inputting */}
      {openInsert && (
        <InputForm
          formValue={formValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeWinInsert={closeWinInsert}
        />
      )}
      <Table openWinEdit={openWinEdit} informations={informations} />
      {/* if openEdit is true open window for editing */}
      {openEdit && (
        <EditForm
          closeWinEdit={closeWinEdit}
          handleEdit={handleEdit}
          informEdit={informEdit}
          handleSubmitEdit={handleSubmitEdit}
        />
      )}
    </div>
  );
}

export default App;
