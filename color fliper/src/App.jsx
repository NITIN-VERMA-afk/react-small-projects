import Card from "./components/Card";
import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <h1 className="bg-green-500 text-black p-4 rounded-xl">color fliper</h1>
        <div className="mt-4">
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="bg-blue-500"
          >
            blue
          </button>
          <button
            onClick={() => {
              setColor("red");
            }}
            className="bg-red-500"
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="bg-green-500"
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="bg-yellow-500"
          >
            yellow
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="bg-purple-500"
          >
            purple
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="bg-pink-500"
          >
            pink
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="bg-gray-500"
          >
            gray
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="bg-yellow-500"
          >
            yellow
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="bg-blue-500"
          >
            blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
