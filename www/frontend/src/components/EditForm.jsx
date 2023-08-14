import React from "react";
import axios from "axios";
import "../style/editForm.css";
import {
  END_POINT_URL,
  POST_ITEM_UPDATE_ENDPOINT,
} from "../configs/endpoint.js";
import { closeForm } from "../utilities/closeForm";
const EditForm = ({
  informEdit,
  setInformEdit,
  validate,
  fetchData,
  setOpenEdit,
  setOpenInsert,
  setFormValue,
  defaultValue,
}) => {
  // Function to handle the edit change
  const handleEdit = (e) => {
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
          END_POINT_URL + POST_ITEM_UPDATE_ENDPOINT + `${id}`,
          informEdit
        );
        fetchData();
        closeForm(setOpenEdit, setOpenInsert, setFormValue, defaultValue);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="editForm-Container">
      <div className="editForm">
        <form onSubmit={handleSubmitEdit}>
          <div className="container-form">
            <input type="text" name="id" value={informEdit._id} hidden />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="name"
              onChange={handleEdit}
              name="name"
              value={informEdit.name}
              required
            />

            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder="price"
              onChange={handleEdit}
              name="price"
              value={informEdit.price}
              min="0"
              step="0.01"
              onKeyDown={(e) => {
                if (e.key === "-") {
                  e.preventDefault();
                }
              }}
              required
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              placeholder="quantity"
              onChange={handleEdit}
              name="quantity"
              value={informEdit.quantity}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === ".") {
                  e.preventDefault();
                }
              }}
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              placeholder="description"
              onChange={handleEdit}
              name="description"
              value={informEdit.description}
              required
            />
            <div className="but">
              <button className="btn">SAVE</button>
              <button
                className="btn-cancel"
                type="submit"
                onClick={() =>
                  closeForm(
                    setOpenEdit,
                    setOpenInsert,
                    setFormValue,
                    defaultValue
                  )
                }
              >
                CANCEL
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
