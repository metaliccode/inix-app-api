import React, { Component } from "react";
import Gallery from "./Gallery";
import axios from "axios";
// import { setState } from "expect";
// import { product } from "prelude-ls";

export default class Products extends Component {
  state = {
    dataProduct: [],
  };

  getallproducts = () => {
    axios.get("/getallproducts").then((res) => {
      // res.header("Access-Control-Allow-Origin", "*");
      // console.log(res.data.products);
      // res.header("Access-Control-Allow-Origin", "true");
      this.setState({
        dataProduct: res.data.products,
      });
    });
  };

  handleRemove = (data) => {
    console.log("data yang dipilih", data);
    axios
      .post("http://localhost/basicrestci3/index.php/api/deleteproduct", {
        data: { productid: data },
        headers: { authorization: "123" },
      })
      .then((res) => {
        res.header("Access-Control-Allow-Origin", "true");
      });
  };

  componentDidMount() {
    this.getallproducts();
  }
  render() {
    return (
      <div>
        {this.state.dataProduct.map((product, index) => {
          return (
            <Gallery
              key={index}
              //   productid={product.productid}
              //   productname={product.productname}
              //   productprice={product.productprice}
              //   productimage={product.productimage}
              data={product}
              remove={this.handleRemove}
            ></Gallery>
          );
        })}
      </div>
    );
  }
}
