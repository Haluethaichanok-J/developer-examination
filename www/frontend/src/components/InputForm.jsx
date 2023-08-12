import React, { useState } from "react";
import "../style/inputForm.css";
const InputForm = ({
  formValue,
  handleChange,
  handleSubmit,
  closeWinInsert,
}) => {
  //set state

  return (
    <div className="insertForm-Container">
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <div className="first-container">
            <input
              type="text"
              placeholder="name"
              onChange={handleChange}
              name="name"
              value={formValue.name}
              required
            />
            <input
              type="number"
              placeholder="price"
              onChange={handleChange}
              name="price"
              value={formValue.price}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-") {
                  e.preventDefault();
                }
              }}
              required
            />

            <input
              id="num"
              type="number"
              placeholder="quantity"
              onChange={handleChange}
              name="quantity"
              value={formValue.quantity}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-") {
                  e.preventDefault();
                }
              }}
              required
            />

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
              <button className="cancel-btn" onClick={closeWinInsert}>
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
