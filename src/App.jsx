import React from "react";
import { Counter_Fn } from "./assets/counter-fn.jsx";
import { ExemploUseEffect } from "./assets/exemplo_use_Efect.jsx";
import { useState, useEffect } from "react";

export const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <Counter_Fn />
      {isVisible && <ExemploUseEffect />}
      <div className= " flex items-center justify-center">
        <button
          className="font-bold bg-sky-500 hover:bg-sky-700 border border-gray-600 rounded-full p-2"
          onClick={() => setIsVisible(!isVisible)}
        >
          Clique para esconder
        </button>
      </div>
    </>
  );
};
