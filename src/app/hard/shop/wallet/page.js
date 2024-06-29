'use client'
import { useState, useEffect } from 'react'
import anton from '../../../../../public/anton.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Wallet() {

  const [countMoney, setCountMoney] = useState(0)

  useEffect(() => {
    let savedBalance = localStorage.getItem('balance')
    if (savedBalance) {
        setCountMoney(Number(savedBalance));
    }
  }, [])

  const addMoney = () => {
    setCountMoney(prevCount => {
      const newCount = prevCount + 1
      localStorage.setItem('balance', newCount)
      return newCount
    })
  }
  
  const router = useRouter()
  function goBack() {
    router.back()
  }

  return(
    <>
    <h1 className="my-2 text-center">Wallet</h1>
    <button onClick={goBack}>back</button>
    <div className="h-full w-[92%] m-auto flex gap-10">
      <div 
      className="border-2 border-cyan-600 rounded-xl w-1/2 h-3/4 flex flex-col p-2">
        <div className="">
          <h2 className="text-center">Your balance</h2>
          <p className='text-center'>{countMoney}</p>
        </div>
        <div className="h-full"></div>
      </div>
      <div 
      className="border-2 border-cyan-600 rounded-xl w-1/2 h-3/4 flex flex-col p-2">
        <h2 className="text-center">Moneta</h2>
        <div className='flex justify-center my-auto'>
        <button 
        className='hover:scale-105 active:scale-75 transition-all duration-200'
        onClick={addMoney}>
        <div className="relative w-60 h-60 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg">
          <Image 
            src={anton} 
            alt="Монета"
            width={300} 
            height={300} 
            className="rounded-full object-cover w-full h-full"
          />
          <div className="absolute inset-0 rounded-full border-4 border-yellow-500"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black opacity-20"></div>
        </div>
        </button>
        </div>
      </div>
    </div>
    </>
  )
}