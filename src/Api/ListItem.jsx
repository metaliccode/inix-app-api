import React from "react";

export default function ListItem(props) {
  return (
    <>
      <tr>
        <td>{props.data.id}</td>
        <td>{props.data.nama}</td>
        <td>{props.data.divisi}</td>
        <td>{props.data.genre}</td>
        <td>{props.data.alamat}</td>
        <td>
          <h4>
            <button
              className="btn btn-warning"
              onClick={() => props.update(props.data)}
            >
              <i className="fas fa-edit"></i>
            </button>
          </h4>
          <h4>
            <button
              className="btn btn-danger"
              onClick={() => props.delete(props.data.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </h4>
        </td>
      </tr>
    </>
  );
}
