import React, { Component } from "react";
import { CardList } from "./components/CardList";
import Footer from "./components/Footer";
import { SearchBox } from "./components/SearchBox";

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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className=" bg-blue-200 p-2 ">
        <div className="App">
          <h1 className="font-serif text-blue-600 text-center  font-extrabold text-4xl p-2 ">
            Monsters Rolodex
          </h1>
          <SearchBox
            placeholder="search monsters"
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />
          <CardList monsters={filteredMonsters} />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
