import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <div>
        <h1 className=text-blue-600 text-center font-black text-3xl p-2 mt-12 md:text-4xl italic font-mono uppercase ">
          Robo Friends
        </h1>
        <SearchBox
          placeholder="search monsters"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
