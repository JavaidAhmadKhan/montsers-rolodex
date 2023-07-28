import React, { ChangeEventHandler } from "react";

type SearchBoxProps = {
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => {
  return (
    <div className="flex items-center justify-center">
      <input
        className="flex flex-grow h-14 text-center bg-gray-100 text-gray-600 shadow-lg rounded-full p-6 outline-none  "
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
