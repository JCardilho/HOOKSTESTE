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
    <div className=' flex items-center justify-center  '>
        <div className='p-4 '>
        <input
        className=' border font-bold border-gray-600 rounded-full p-2 cursor-pointer '
        type="text"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />
        </div>
        <div>
        <input
        className='cursor-pointer  '
        type='checkbox'
        value={checked}
        onChange={(e)=> setChecked(e.target.checked)}
        />
        </div>

        
    </div>
  )
}

