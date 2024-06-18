'use client'
import { useState } from "react"
export default function Calculator() {
  const [value, setValue] = useState('')
    return <> 
        <div className="flex justify-center bg-pink-100 h-full">
          <div className="bg-white h-[350px] p-2 rounded-md my-2 shadow-2xl sm:my-4">
              <form>
                <div className="mb-2 ">
                  <input type='text' className="w-full text-2xl text-right border-2 border-pink-100 rounded-md" value={value}/>
                </div>
                <div className="flex justify-between items-center">
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='AC' onClick={e => setValue('')}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='DE' onClick={e => setValue(value.slice(0, -1))}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='.' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='/' onClick={e => setValue(value + e.target.value)}></input>
                </div>
                <div className="flex justify-between items-center">
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='8' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='7' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='9' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='*' onClick={e => setValue(value + e.target.value)}></input>
                </div>
                <div className="flex justify-between items-center">
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='4' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='5' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='6' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='+' onClick={e => setValue(value + e.target.value)}></input>
                </div>
                <div className="flex justify-between items-center">
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='3' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='2' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='1' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='-' onClick={e => setValue(value + e.target.value)}></input>
                </div>
                <div className="flex justify-start items-center">
                  <input className='w-[50px] h-[50px] my-1 mr-3 ml-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='00' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[50px] h-[50px] my-1 mr-2 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='0' onClick={e => setValue(value + e.target.value)}></input>
                  <input className='w-[113px] h-[50px] m-1 bg-pink-200 rounded-md hover:bg-pink-300' type='button' value='=' onClick={e => setValue(String(eval(value)))}></input>
                </div>
              </form>
           </div>
        </div>   
         </>
}