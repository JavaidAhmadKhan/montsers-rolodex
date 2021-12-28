import React from "react";

export const Card = (props) => (
  <div className="flex flex-grow cursor-pointer drop-shadow-2xl bg-blue-300 border-2 p-10 m-4 transition ease-in-out delay-105 hover:-translate-y-1 hover:scale-105 duration-300 rounded-md">
    <div>
      <img
        className="flex object-contain items-center"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
        alt="robots"
      />
      <h1 className="text-lg md:text-xl lg:text-2xl bold  text-center">
        {props.monster.name}
      </h1>
      <p className="text-xs md:text-lg  bold  text-center">
        {props.monster.email}
      </p>
    </div>
  </div>
);
