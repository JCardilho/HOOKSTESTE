import React, { useState } from 'react'
import { ExemploUseEffect } from './exemplo_use_Efect';

export const Counter_Fn = () => {
  const[valorAtual, setValorAtual] = useState(200);
  const [minhaString, setminhaString] = useState("Claudia Fernanda")

    const increment =( ) => {
      setValorAtual(prevCount => {
        setminhaString("Ana Lucia tem contagem " + prevCount );
        return prevCount +1
      });
    
    }
  

  return (
    <>
    <div className='p-8 text-center'>
      <h2 > Contador usando useState</h2>
      <p>Contagem :  {valorAtual}</p>
      <p>nome;  {minhaString}</p>
      <button className= "bg-sky-500/75" onClick={increment}>Adicionar</button>
    </div>


    <ExemploUseEffect/>
    </>
  )
}

