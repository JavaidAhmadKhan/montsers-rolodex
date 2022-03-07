import { useState, useEffect } from "react";
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
        <h1 className=" font-serif text-blue-600 text-center  font-extrabold text-4xl p-2 mt-12 ">
          Monsters Rolodex
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
