import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

import { Monster } from "../App";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="m-6 md:m-10 xl:m-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
      {monsters.map((monster) => (
        // <Link to={`/about/${monsters.id}`}>
        <Card key={monster.id} monster={monster} />
        // </Link>
      ))}
    </div>
  );
};

export default CardList;
