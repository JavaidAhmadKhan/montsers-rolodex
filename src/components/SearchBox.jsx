import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="flex flex-grow w-max p-2 m-auto md:p-4 xl:p-6 xl:p-8 ">
    <input
      className="flex flex-grow h-14 text-center bg-gray-50 text-gray-600 shadow-lg rounded-full p-6 outline-none  "
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
