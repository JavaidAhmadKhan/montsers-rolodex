import { useState } from "react";

function Hello() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl m-4 text-green-500">items added {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="m-4 bg-blue-500 text-white rounded-full p-2"
      >
        Increment
      </button>
      <button onClick={() => setCount(count-1)}className="m-4 bg-red-500 text-white rounded-full p-2">
        Decrement
      </button>
    </div>
  );
}

export default Hello;
