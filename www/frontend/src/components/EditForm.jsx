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
                onClick={closeWinEdit}
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
