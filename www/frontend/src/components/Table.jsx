import React from "react";
import "../style/Table.css";

const Table = ({ openForm, informations }) => {
  return (
    <div className="containerTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {informations.map((data) => (
            <tr key={data._id}>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.quantity}</td>
              <td className="action-container">
                <button
                  className="action"
                  onClick={(e) => openForm(e, data._id)}
                >
                  EDIT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
