
import React from 'react'
import {Counter_Fn} from './assets/counter-fn.jsx'
import { ExemploUseEffect } from './assets/exemplo_use_Efect.jsx'
import { useState, useEffect  } from 'react'


export const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    
      <>
       <Counter_Fn/>
    {isVisible  && <ExemploUseEffect/>}
      <button  className = "bg-sky-500 hover:bg-sky-700" onClick={( ) => setIsVisible(!isVisible)}>Clique para esconder</button>
      </>
    
  )
}

