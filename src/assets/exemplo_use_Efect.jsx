import React,{useState, useEffect} from 'react'

export const ExemploUseEffect = () => {
    const[value, setValue] = useState("Digite Aqui... Value");
    const [checked, setChecked] = useState(false);

    useEffect(( )=> {
        console.log("Hello from UseEffect");

        return () => {
            console.log("helllo descruction")
        }
    },[]);


  return (
    <div className='flex space-x-4  p-4'>
        <input
        className='  rounded-full p-2 cursor-pointer '
        type="text"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />
        <input
        className='cursor-pointer'
        type='checkbox'
        value={checked}
        onChange={(e)=> setChecked(e.target.checked)}
        />

        
    </div>
  )
}

