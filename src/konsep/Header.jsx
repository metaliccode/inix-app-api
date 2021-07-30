// membuat komponen dengan fungsi
// function Header() {
//   return (
//     <div>
//       <h1>Training Reactjs untuk Pemula</h1>
//       <h2>Mari belajar Reactjs, di Inixindo Bandung</h2>
//     </div>
//   );
// }

// membuat komponen dengan class
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Training Reactjs untuk Pemula</h1>
//         <h2>Mari belajar Reactjs, di Inixindo Bandung</h2>
//         <p>Membuat komponen dengan class</p>
//       </div>
//     );
//   }
// }

import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    // membuat objek state
    this.state = {
      title: "Training Inixindo Bandung",
      subTitle: "Building Web application with React Js",
    };
  }

  changeTitle = () => {
    this.setState({
      title: "Tutorial Reactjs Inixindo Bandung",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subTitle}</h2>
        <button onClick={this.changeTitle}>Ubah Judul</button>
      </div>
    );
  }
}

export default Header;
