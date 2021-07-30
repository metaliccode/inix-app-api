import logo from "./logo.svg";
import "./App.css";
import Message from "./konsep/Message";
import Header from "./konsep/Header";
import Button from "./konsep/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Selamat Datang di Inixindo Bandung</p>
        <Button></Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yuk Belajar React Js
        </a>
        <Header></Header>
        <Message />
      </header>
    </div>
  );
}
export default App;
