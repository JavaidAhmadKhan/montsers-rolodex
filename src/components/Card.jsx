import React from "react";

const Card = ({ monster: { id, name, email } }) => {
  return (
    <div className="flex flex-grow cursor-pointer drop-shadow-2xl border-2 p-10 m-4 transition ease-in-out delay-105 hover:-translate-y-1 hover:scale-105 duration-300 rounded-md items-center justify-center">
      <div>
        <img
          className="flex object-contain items-center"
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
          alt="robots"
        />
        <h1 className="text-lg md:text-xl lg:text-xl bold  text-center mt-2 text-slate-900">
          {name}
        </h1>
        <p className="text-xs md:text-lg  bold  text-center text-slate-900">{email}</p>
      </div>
    </div>
  );
};

export default Card;
