import React from "react";

interface ISearchBoxProps {
  placeholder?: string;
  onChangeHandler: string;
}

const SearchBox = ({ placeholder, onChangeHandler }: ISearchBoxProps) => {
  return (
    <div className="flex flex-grow w-min p-2 m-auto md:p-4 xl:p-6 md:w-max">
      <input
        className="flex flex-grow h-14 text-center bg-gray-50 text-gray-600 shadow-lg rounded-full p-6 outline-none  "
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
