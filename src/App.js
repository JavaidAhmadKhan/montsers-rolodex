import React, { Component } from "react";
import { CardList } from "./components/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <div className="flex flex-grow w-max p-8 m-auto ">
          <input
            className="flex flex-grow h-14 text-center bg-gray-50 text-gray-600 shadow-lg rounded-full p-6 outline-none "
            type="search"
            placeholder="search monsters"
            onChange={(e) => this.setState({ searchField: e.target.value })}
          />
        </div>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
