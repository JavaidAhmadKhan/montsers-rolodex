import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import Loading from "./components/Loading";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .then(
        (monsters) => {
          setIsLoaded(true);
          setFilteredMonsters(filteredMonsters);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
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
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4 p-3 sticky top-0 z-10 left-0 right-0 bg-[#72b3b5]">
          <h1 className="text-white  font-black text-3xl md:text-3xl italic font-mono">
            Robo Friends
          </h1>
          <SearchBox
            placeholder="search monsters"
            onChangeHandler={onSearchChange}
          />
        </div>
        <CardList monsters={filteredMonsters} />
        <Footer />
      </div>
    );
  }
};

export default App;
