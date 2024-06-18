'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Basket() {
  
  const [basketList, setBasketList] = useState([])
  
  const delBasketList = (item) => {
    setBasketList([])
    localStorage.setItem('basketList', [])
}

  useEffect(() => {
    const savedBasketList = localStorage.getItem('basketList')
    if (savedBasketList) {
      setBasketList(JSON.parse(savedBasketList))
    }
  }, [])

  return(
    <>
    <h1 className="my-2 text-center">Basket</h1>
    <Link href='./'>Back</Link>
      {basketList && basketList.length > 0 ? (
        <ul className='grid grid-cols-3 gap-4 my-4'>
          {basketList.map((item, index) => (
            <li key={index} className='border rounded p-2'>
              <div className='flex items-center mb-2'>
                <div className='w-16 h-16'>
                  <Image src={item.imageUrl} alt={item.title} width={64} height={64} />
                </div>
                <div className='ml-2'>
                  <span className='font-bold'>{item.title}</span>
                  <p>{item.price}</p>
                </div>
                <div>
                  {Array.isArray(item.cat) ? 
                    item.cat.map((category, index) => (
                      <h4 
                        key={index}
                        className={
                          `${category === 'New' ? 'text-blue-500 bg-teal-200 rounded-md'  : 
                            category === 'Popular' ? 'text-red-500 bg-pink-200 rounded-md' : 
                            category === 'Rare' ? 'text-green-500 bg-yellow-200 rounded-md' : 
                            category === 'Hot' ? 'text-yellow-500' : ''}
                          p-1 m-2`}
                      >
                        {category}
                      </h4>
                    )) : 
                    <h4 
                      className={
                        `${item.cat === 'New' ? 'text-blue-500 bg-teal-200 rounded-md' : 
                          item.cat === 'Popular' ? 'bg-pink-200 rounded-md' : 
                          item.cat === 'Rare' ? 'text-green-500 bg-yellow-200 rounded-md' : 
                          item.cat === 'Hot' ? 'text-yellow-500' : ''}
                        p-1 m-2`}
                    >
                      {item.cat}
                    </h4>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="my-2">Your basket is empty.</p>
      )}
      <div>
        <button
          onClick={() => delBasketList()}
          className='bg-rose-400 rounded-md p-2 hover:scale-105 active:scale-75 transition-all duration-300 hover:bg-rose-500'>
            удалить
        </button>
      </div>
    </>
  )
}