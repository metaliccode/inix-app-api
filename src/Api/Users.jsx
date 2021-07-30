import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ListItem from "./ListItem";
import TableData from "./TableData";
import axios from "axios";

export default class Users extends Component {
  state = {
    dataUser: [],
    formUser: {
      id: 1,
      nama: "",
      divisi: "",
      genre: "",
      alamat: "",
    },
    isUpdate: false,
  };

  getUserApi = () => {
    axios
      .get("http://localhost:3004/users?_sort=id&_order=desc")
      .then((res) => {
        this.setState({
          dataUser: res.data,
        });
      });
  };

  postUserApi = () => {
    axios.post("http://localhost:3004/users", this.state.formUser).then(
      (res) => {
        console.log(res);
        this.getUserApi(res);
        this.setState({
          formUser: {
            id: 1,
            nama: "",
            divisi: "",
            genre: "",
            alamat: "",
          },
        });
      },
      (err) => {
        console.log("Errors Bro : ", err);
      }
    );
  };

  putUserApi = () => {
    axios
      .put(
        `http://localhost:3004/users/${this.state.formUser.id}`,
        this.state.formUser
      )
      .then((res) => {
        console.log(res);
        this.getUserApi(res);
        this.setState({
          isUpdate: false,
          formUser: {
            id: 1,
            nama: "",
            divisi: "",
            genre: "",
            alamat: "",
          },
        });
      });
  };

  deleteUserApi = (data) => {
    axios
      .delete(`http://localhost:3004/users/${data}`)
      .then((res) => this.getUserApi(res));
  };

  handleFormChange = (event) => {
    // console.log(event.target.name);
    let formUserNew = { ...this.state.formUser };
    let timeStamp = new Date().getTime();

    if (!this.state.isUpdate) {
      formUserNew["id"] = timeStamp;
    }

    formUserNew[event.target.name] = event.target.value;

    this.setState({
      formUser: formUserNew,
    });
  };

  handleUpdate = (data) => {
    // console.log(data);
    // axios
    //   .put(`http://localhost:3004/users/${data}`, this.state.formUser)
    //   .then((res) => {
    //     console.log(res);
    //     this.getUserApi();
    //   });
    this.setState({
      formUser: data,
      isUpdate: true,
    });
  };

  handleSubmit = () => {
    // console.log(this.state.formUser);
    if (this.state.isUpdate) {
      this.putUserApi();
    } else {
      this.postUserApi();
    }
  };

  componentDidMount() {
    this.getUserApi();
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col md={6}>
              <div>
                <div className="form-group">
                  <label htmlFor="nama">Nama Lengkap</label>
                  <input
                    className="form-control"
                    type="text"
                    name="nama"
                    placeholder="Masukan Nama ..."
                    onChange={this.handleFormChange}
                    value={this.state.formUser.nama}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="divisi">Divisi</label>
                  <select
                    value={this.state.formUser.divisi}
                    name="divisi"
                    className="form-control"
                    onChange={this.handleFormChange}
                  >
                    <option value="">-Pilih Salah Satu-</option>
                    <option value="Education">Education</option>
                    <option value="Office">Office</option>
                    <option value="Sales">Sales</option>
                    <option value="Digital">Digital</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="genre">Jenis Kelamin</label>
                  <br />
                  <input
                    className="radio-buttons"
                    type="radio"
                    name="genre"
                    onChange={this.handleFormChange}
                    value="Laki - Laki"
                    // {(this.state.formUser.genre ? checked : null )}
                  />{" "}
                  Laki-Laki{" "}
                  <input
                    type="radio"
                    name="genre"
                    onChange={this.handleFormChange}
                    // value={this.state.formUser.genre}
                    value="Perempuan"
                  />{" "}
                  Perempuan
                </div>
                <div className="form-group">
                  <label htmlFor="alamat">Alamat</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="alamat"
                    placeholder="Masukan Alamat ..."
                    onChange={this.handleFormChange}
                    value={this.state.formUser.alamat}
                  />
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <TableData>
                {this.state.dataUser.map((user) => {
                  return (
                    <ListItem
                      key={user.id}
                      //   id={user.id}
                      //   nama={user.nama}
                      //   divisi={user.divisi}
                      //   genre={user.genre}
                      //   alamat={user.alamat}
                      data={user}
                      update={this.handleUpdate}
                      delete={this.deleteUserApi}
                    ></ListItem>
                  );
                })}
              </TableData>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
