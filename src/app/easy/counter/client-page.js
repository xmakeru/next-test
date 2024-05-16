'use client'
import { useState } from "react"

export default function Counter() {
   
  const [count, setCount] = useState(0)
  
    return <>
    <div className="flex flex-col justify-center items-center">
        <h1>Counter</h1>
        {count}
        <div>
            
            <button onClick={() => setCount(count + 1)}
            className="bg-green-400 rounded-full">+ Plus</button>

            <button onClick={() => setCount(count - 1)}
            className="bg-red-400 rounded-full">Minus -</button>
        </div>
    </div>
    </>
}