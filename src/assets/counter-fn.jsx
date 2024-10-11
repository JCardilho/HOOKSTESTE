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

    const decrement = () => {
      setValorAtual(prevCount =>prevCount - 1)
    }
  

  return (
    <>
    <div className='p-8 text-center'>
      <h2 > Contador usando useState</h2>
      <p>Contagem :  {valorAtual}</p>
      <p>nome;  {minhaString}</p>
      <div>
      <button className= "font-bold bg-sky-500 hover:bg-sky-700 border border-gray-600 rounded-full p-2" onClick={increment}  >Adicionar</button>
      </div>
      <div className='
       p-2'>
      <button className= "font-bold bg-sky-500 hover:bg-sky-700 border border-gray-600 rounded-full p-2 " onClick={decrement}>decrementar</button>
      </div>
    </div>


    
    </>
  )
}

