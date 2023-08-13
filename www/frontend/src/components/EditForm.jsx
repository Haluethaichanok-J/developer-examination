import React from "react";
import "../style/editForm.css";
const EditForm = ({
  closeWinEdit,
  informEdit,
  handleEdit,
  handleSubmitEdit,
}) => {
  return (
    <div className="editForm-Container">
      <div className="editForm">
        <div className="container-form">
          <input type="text" name="id" value={informEdit._id} hidden />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="name"
            onChange={handleEdit}
            name="name"
            value={informEdit.name}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="price"
            onChange={handleEdit}
            name="price"
            value={informEdit.price}
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            placeholder="quantity"
            onChange={handleEdit}
            name="quantity"
            value={informEdit.quantity}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            placeholder="description"
            onChange={handleEdit}
            name="description"
            value={informEdit.description}
          />
          <div className="but">
            <button className="btn" type="submit" onClick={handleSubmitEdit}>
              SAVE
            </button>
            <button className="btn-cancel" type="submit" onClick={closeWinEdit}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
