import React from "react";
import "../style/inputForm.css";
import axios from "axios";
import {
  END_POINT_URL,
  POST_ITEM_INSERT_ENDPOINT,
} from "../configs/endpoint.js";
const InputForm = ({
  formValue,
  closeForm,
  defaultValue,
  setFormValue,
  validate,
  fetchData,
}) => {
  //Function to handle change in input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  //Function to handle submit in input
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate(formValue);
    console.log(error);
    if (!error) {
      try {
        const response = await axios.post(
          END_POINT_URL + POST_ITEM_INSERT_ENDPOINT,
          formValue
        );
        fetchData();
        closeForm();
        setFormValue(defaultValue);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="insertForm-Container">
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="name"
              onChange={handleChange}
              name="name"
              value={formValue.name}
              required
            />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder="price"
              onChange={handleChange}
              name="price"
              value={formValue.price}
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
              id="num"
              type="number"
              placeholder="quantity"
              onChange={handleChange}
              name="quantity"
              value={formValue.quantity}
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
              onChange={handleChange}
              name="description"
              value={formValue.description}
              required
            />
            <div className="insert-btn">
              <button className="create-btn" type="submit">
                CREATE
              </button>
              <button className="cancel-btn" onClick={closeForm}>
                CANCEL
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
