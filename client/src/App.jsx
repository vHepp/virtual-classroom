import logo from "./logo.svg";
import "./App.css";

import Room from "./Components/Room";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-1" alt="logo" />
        <div className="App-links">
          <a href="/"> Room List </a>
          <a href="/"> Messages </a>
          <a href="/"> Leave </a>
          <a href="/"> Profile </a>
          <a href="/"> Log out </a>
        </div>
        <img src={logo} className="App-logo-2" alt="logo" />
      </header>
      <body className="App-body">
        <Room className="App-room" />
      </body>
    </div>
  );
}

export default App;
