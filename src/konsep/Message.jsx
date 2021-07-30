import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <small>{this.props.sender}:</small>
        <p>{this.props.content}</p>
        <hr />
      </div>
    );
  }
}

// membaut komponen ChatBox
class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <Message sender="Rine" content="Sudah belajar React?" />
        <Message sender="Ihsan" content="Ini lagi belajar React" />
        <Message sender="Rine" content="OK, selamat belajar" />
      </div>
    );
  }
}

export default ChatBox;

// menggunakan komponen
// const Chat = () => (
//   <div>
//     <Message sender="Ihsan" content="Hi, Apa kabar?" />
//     <Message sender="Rine" content="Kabar Baik" />
//   </div>
// );

// var content = "Hi, apa kabar?";
// var sender = "Dian";

// let chat = (
//   <div>
//   <Message sender={sender} content={content} />
//   </div>
// );
