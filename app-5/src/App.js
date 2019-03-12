import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Image from './components/image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image img="https://i.ytimg.com/vi/SQudKvrwDAU/maxresdefault.jpg"/>
      </div>
    );
  }
}

export default App;
