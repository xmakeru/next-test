'use client'
import { useState } from "react"

export default function Counter() {
   
  const [count, setCount] = useState(0)
  
    return <>
    <div className="flex justify-center">
    <div className="flex flex-col justify-center items-center my-[10%] bg-slate-400 py-36 px-24  rounded-full">
        <div className="flex flex-col items-center text-2xl py-2">
        <h1>Counter</h1>
        {count}
        <div>  
            <button onClick={() => setCount(count + 1)}
            className="bg-green-400 rounded-full mx-2 p-2">+ Plus</button>

            <button onClick={() => setCount(count - 1)}
            className="bg-red-400 rounded-full mx-2 p-2">Minus -</button>
        </div>
        </div>
        
    </div>
    </div>
    
    </>
}