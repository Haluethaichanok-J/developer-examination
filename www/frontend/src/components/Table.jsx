import React from "react";
import "../style/Table.css";
import { openForm } from "../utilities/openForm";
const Table = ({ informations, setOpenInsert, fetchDataId, setOpenEdit }) => {
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
                  // onClick={(e) => openForm(e, data._id)}
                  onClick={() =>
                    openForm(data._id, setOpenInsert, fetchDataId, setOpenEdit)
                  }
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
