import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      list: ['chair', 'cheese', 'cow', 'dog'],
      filteredList: [],
    }
  }

  handleChange = (evt) => {
    this.setState({
      text: evt.target.value,
    })
  }
  

  filterList = () => {
    let {text, list} = this.state;
    let filter = list.filter((word) => word.includes(text)).map((word) => word)
    return filter
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} />
        <h2>{this.filterList()}</h2>
      </div>
    );
  }
}

export default App;
