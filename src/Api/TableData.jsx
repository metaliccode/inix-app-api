import React from "react";
import { Table } from "react-bootstrap";

export default function TableData(props) {
  return (
    <div>
      <h4>Data Users</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Lengkap</th>
            <th>Jenis Kelamin</th>
            <th>Divisi</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </Table>
    </div>
  );
}
