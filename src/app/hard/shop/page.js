'use client'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { itemList } from './components/ItemsList'
import RenderPageButtons from './components/RenderPageButtons'
import WalletComponent from './components/Wallet'

export default function Shop() {

  useEffect(() => {
    let savedBasketList = localStorage.getItem('basketList')
    if (savedBasketList) {
        setBasketList(JSON.parse(savedBasketList));
    } 
}, [])

  useEffect(() => {
    let savedBalance = localStorage.getItem('balance')
    if (savedBalance) {
        setCountMoney(Number(savedBalance));
    } 
  }, [])
  const [search, setSearch] = useState('')
  const [filteredItems, setFilteredItems] = useState(itemList)
  const [basketList, setBasketList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [countMoney, setCountMoney] = useState(0)
  const pageSize = 9
  //Индекс первого и последнего индекса текущей страницы. Например, на странице 2 - индекс последнего элемента от массива будет
  //2 * 8 = 16, а первого 16- 8 = 8
  const indexOfLastItem = currentPage * pageSize
  const indexOfFirstItem = indexOfLastItem - pageSize
  //Создаем подмассив итемов для текущей страницы
  const currentItems = filteredItems?.slice(indexOfFirstItem, indexOfLastItem)
  //Вычисляем общее количество страниц и округляем = 18 / 8 = 3
  const totalPages = Math.ceil(filteredItems.length / pageSize)
  //Если массив не загружен - показываем загрузку
  if (!itemList) return <div>Loading...</div>
  //Создаем функцию, которая принимает номер страницы и обновляет значение текущей страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  

const handleSearch = (e) => {
    e.preventDefault()
    const filtered = itemList.filter(item => {
      const title = item.title ? item.title.toLowerCase() : ''
      const description = item.description ? item.description.toLowerCase() : ''
      const categories = Array.isArray(item.cat) ? item.cat.map(cat => cat.toLowerCase()) : []
      const searchLower = search.toLowerCase()
      return (
        title.includes(searchLower.toLowerCase()) ||
        description.includes(searchLower.toLowerCase()) ||
        categories.some(category => category.includes(searchLower.toLowerCase()))
      )
    })
    setFilteredItems(filtered)
    setCurrentPage(1)
  }

  const addItemToBasket = (item) => {
    if (countMoney >= item.price) {
      setBasketList(prevBasketList => [...prevBasketList, item])
      localStorage.setItem('basketList', JSON.stringify([...basketList, item]))
      setCountMoney(prevCount => prevCount - item.price)
      localStorage.setItem('balance', countMoney - item.price)
    } else {
      alert('У вас недостаточно средств для покупки этого предмета.')
    }
  }

  const delBasketList = () => {
    const totalPrice = basketList.reduce((total, item) => total + item.price, 0);
    setBasketList([])
    localStorage.setItem('basketList', JSON.stringify([]))
    const currentMoney = Number(localStorage.getItem('balance')) || 0
    const newBalance = currentMoney + totalPrice
    setCountMoney(newBalance)
    localStorage.setItem('balance', newBalance.toString())
  }

  const delItemFromBasket = (item) => {
    const newBasketList = basketList.filter((basketItem) => basketItem.id !== item.id)
    setBasketList(newBasketList)
    localStorage.setItem('basketList', JSON.stringify(newBasketList))
    const newBalance = (Number(localStorage.getItem('balance')) || 0 ) + item.price
    setCountMoney(newBalance)
    localStorage.setItem('balance', newBalance.toString())
  }

  return (
    <>
    {/* Корзина */}
    <div className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'>
      <div className='flex items-center gap-4 p-2'>
        <Popover>
          <PopoverButton>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className='w-12 h-[55px] bg-blue-300 rounded-md hover:bg-blue-500 hover:scale-105 active:scale-75 transition-all duration-200'>
            <path d="M21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.146-5.504-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1-1H6.764L4.31 11h15.38l-2.454 9z"></path>
            <path d="M9 13h2v5H9zm4 0h2v5h-2z"></path></svg>
          </PopoverButton>
          <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
          >
          <PopoverPanel
          anchor="bottom"
          className="rounded-md"
          >
          <div className='bg-cyan-700 p-2'>
            <div className='my-4'>
              <h2 className='text-2xl font-bold'>Basket</h2>
                {basketList && basketList.length > 0 ? (
                  <ul className='grid grid-cols-3 gap-4'>
                      {basketList.map((item, index) => (
                        <li key={index} className='border rounded p-2'>
                          <div className='flex items-center mb-2'>
                            <div className='w-16 h-16'>
                              <Image src={item.imageUrl} alt={item.title} />
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
                               <button
                               onClick={() => delItemFromBasket(item)}
                               className=''>delete</button>
                               </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                  <p>Your basket is empty.</p>
                )}
            </div>
            <div>
              <button
              onClick={() => delBasketList()}
              className='bg-rose-400 rounded-md p-2 hover:scale-105 active:scale-75 transition-all duration-300 hover:bg-rose-500'>
                delete all</button>
            </div>
        </div>
        </PopoverPanel>
        </Transition>
        </Popover>
        <Link href='/hard/shop/basket'
        className='bg-blue-300 p-2 mt-[-6px] rounded-md h-[55px] hover:bg-blue-500 hover:scale-105 active:scale-75 transition-all duration-300'
        >перейти в корзину</Link>
        <form onSubmit={handleSearch} className="text-center w-full">
          <input
            type="search"
            placeholder="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="p-2 rounded-md w-[70%]"
          />
          <button type="submit" className="ml-2 p-2 text-white bg-blue-300 hover:scale-105 active:scale-75 transition-all duration-300 rounded-md">Search</button>
        </form>
        <WalletComponent countMoney={countMoney}/>
        </div>
        <div className="flex justify-center my-4">
        <RenderPageButtons 
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}/>
        </div>
          <div className='grid grid-cols-3 gap-2'>
              {filteredItems.length > 0 ? (currentItems.map((e) => (
              <div key={e.id} className='bg-gradient-to-r from-sky-500 to-indigo-500 p-2 m-4 rounded-md'>
                <div className=''>
                  <Image src={e.imageUrl} alt={e.name} className='w-full h-full' />
                </div>
                <div>
                  <div className='mt-4'>
                    <h2 className='text-3xl'>{e.title}</h2>
                  </div>
                  <div className='text-xl'>
                    <h3 className='mb-4 break-words'>{e.description}</h3>
                  </div>
                  <div className='flex gap-4'>
                    {Array.isArray(e.cat) ? 
                      e.cat.map((category, index) => (
                      <h4 
                      key={index}
                      className={
                      `${category === 'New' ? 'text-blue-500 bg-teal-200 rounded-md'  : 
                      category === 'Popular' ? 'text-red-500 bg-pink-200 rounded-md' : 
                      category === 'Rare' ? 'text-green-500 bg-yellow-200 rounded-md' : 
                      category === 'Hot' ? 'text-yellow-500' : ''}
                      p-2`}
                    >
                      {category}
                      </h4>
                     )) : 
                      <h4 
                      className={
                      `${e.cat === 'New' ? 'text-blue-500 bg-teal-200 rounded-md' : 
                      e.cat === 'Popular' ? 'bg-pink-200 rounded-md' : 
                      e.cat === 'Rare' ? 'text-green-500 bg-yellow-200 rounded-md' : 
                      e.cat === 'Hot' ? 'text-yellow-500' : ''}
                      p-2`}
                      >
                      {e.cat}
                      </h4>}
                    </div>
                    <div className='my-4 text-xl flex justify-between flex-wrap'>
                      <p 
                      className='bg-yellow-500 text-white p-2 rounded-xl'>{e.price}</p>
                      <button 
                      className='bg-blue-500 py-2 px-4 rounded-xl hover:bg-blue-600 hover:scale-105 active:scale-75 transition-all duration-300'
                      onClick={() => addItemToBasket(e)}
                      >Add</button>
                    </div>
                    </div>    
                    </div>
                ))) : <div className='h-screen w-screen text-center'>
                    <span>По вашему запросу ничего не найдено</span>
                    </div>}
            </div>

            <div className="flex justify-center my-4">
              <RenderPageButtons 
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}/>
            </div>
            </div>
        </>
    )
}
