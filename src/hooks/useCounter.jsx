import React from 'react'
import { useState } from 'react';

export const useCounter = () => {
    const [valorAtual, setValorAtual] = useState(200);
    const [minhaString, setminhaString] = useState("Claudia Fernanda");

    const increment = () => {
        setValorAtual((prevCount) => {
        setminhaString(`"Ana Lucia tem contagem " ${prevCount + 1}`);

        return prevCount + 1;
        });
    };

    const decrement = () => {
        setValorAtual((prevCount) => {
            setminhaString(`Ana Lucia tem contagem ${prevCount - 1}`);
            return prevCount - 1;
    });
};


  return {
    minhaString,
    valorAtual,
    decrement,
    increment
  };
}

