import React, { useState } from "react";
import { ExemploUseEffect } from "./exemplo_use_Efect";
import { useCounter } from "../hooks/useCounter.jsx";

export const Counter_Fn = () => {
  const { valorAtual, decrement, increment, minhaString } = useCounter();
  console.log(valorAtual);
  console.log(decrement);
  console.log(increment);

  return (
    <>
      <div className="p-8 text-center">
        <h2> Contador usando useState</h2>
        <p>Contagem : {valorAtual}</p>
        <p>nome; {minhaString}</p>
        <div>
          <button
            className="font-bold bg-sky-500 hover:bg-sky-700 border border-gray-600 rounded-full p-2"
            onClick={increment}
          >
            Adicionar
          </button>
        </div>
        <div
          className="
       p-2"
        >
          <button
            className="font-bold bg-sky-500 hover:bg-sky-700 border border-gray-600 rounded-full p-2 "
            onClick={decrement}
          >
            decrementar
          </button>
        </div>
      </div>
    </>
  );
};
