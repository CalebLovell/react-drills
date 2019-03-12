import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      typing: ''
    }
  }


  handleTyping = (stuff) => {
    this.setState({
      typing: stuff
    })
  }


  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.handleTyping(e.target.value) }/>
        <p>{this.state.typing}</p>
      </div>
    );
  }
}

export default App;
