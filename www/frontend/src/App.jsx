import React, { useState, useEffect } from "react";
import "./style/App.css";
import Table from "./components/Table";
import InputForm from "./components/InputForm";
import axios from "axios";
import EditForm from "./components/editForm";
import { validate } from "./utilities/validateForm";

import {
  END_POINT_URL,
  GET_ITEM_ENDPOINT,
  GET_ITEM_ID_ENDPOINT,
} from "./configs/endpoint.js";
function App() {
  //set state
  const defaultValue = {
    name: "",
    price: null,
    quantity: null,
    description: "",
  };
  const [formValue, setFormValue] = useState(defaultValue);
  console.log(formValue);
  const [openEdit, setOpenEdit] = useState(false);
  const [openInsert, setOpenInsert] = useState(false);
  //informations collect fetchData
  const [informations, setInformations] = useState([]);
  //informEdit collect fetch data item id
  const [informEdit, setInformEdit] = useState([]);

  //Function fetch data
  const fetchData = async () => {
    if (!informations.id) {
      try {
        const response = await axios.get(END_POINT_URL + GET_ITEM_ENDPOINT);
        setInformations(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Function fetch data by id
  const fetchDataId = async (id) => {
    try {
      const response = await axios.get(
        END_POINT_URL + GET_ITEM_ID_ENDPOINT + `${id}`
      );
      setInformEdit(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  //Function open form
  const openForm = (e, id) => {
    if (!id) {
      setOpenInsert(true);
      fetchDataId(id);
    } else if (id) {
      fetchDataId(id);
      setOpenEdit(true);
    }
  };
  //Function close form
  const closeForm = (e) => {
    setOpenEdit(false);
    setOpenInsert(false);
    setFormValue({
      name: "",
      price: null,
      quantity: null,
      description: "",
    });
  };

  return (
    <div className="all-container">
      <div className="add-btn">
        <button onClick={openForm}>Add Item Data</button>
      </div>
      {/* if openInert is true open window for inputting */}
      {openInsert && (
        <InputForm
          formValue={formValue}
          closeForm={closeForm}
          defaultValue={defaultValue}
          setFormValue={setFormValue}
          validate={validate}
          fetchData={fetchData}
        />
      )}
      <Table openForm={openForm} informations={informations} />
      {/* if openEdit is true open window for editing */}
      {openEdit && (
        <EditForm
          closeForm={closeForm}
          informEdit={informEdit}
          setInformEdit={setInformEdit}
          validate={validate}
          fetchData={fetchData}
        />
      )}
    </div>
  );
}

export default App;
