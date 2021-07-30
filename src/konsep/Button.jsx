import React, { Component } from "react";

export default class Button extends Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       title: "Inixindo Bandung",
  //     };
  //   }
  state = {
    title: "ihsan",
  };

  changeText = () => {
    this.setState({
      title: "Inixindo Saja",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeText}>Ubah Judul</button>
      </div>
    );
  }
}
