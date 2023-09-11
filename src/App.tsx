import React, { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import { getData } from "./utils/data.utils";


export type Monster = {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(`https://jsonplaceholder.typicode.com/users`)
      setMonsters(users)
    };
    fetchUsers();
  }, []);
  

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
    
  };

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

      {isLoaded ? "loading..." : <CardList monsters={filteredMonsters} />}
      <Footer />
    </div>
  );
}


export default App;
