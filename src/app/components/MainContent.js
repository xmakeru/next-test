'use client'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Link from 'next/link'
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconPointed } from "@heroicons/react/24/solid";

const easyLinkList = [
  {id: 1, title: 'Counter', href: '/easy/counter', decsription: 'Счетчик'},
  {id: 2, title: 'Calculator', href: '/easy/calculator', decsription: 'Калькулятор'},
  {id: 3, title: 'ImageSlider', href: '/easy/image-slider', decsription: 'Слайдер картинок'},
  {id: 4, title: 'TaskTest', href: '/easy/task-test', decsription: 'Список задач с LocalStorage'},
  {id: 5, title: 'CatchAllSegmets', href: '/easy/catch-all-segments', decsription: 'В разработке'},
]

const mediumLinkList = [
  {id: 1, title: 'TestAnimation', href: '/medium/test-animation', decsription: 'В разработке'},
  {id: 2, title: 'TestApi', href: '/medium/test-api', decsription: 'Список курса крипты. Курс неактуален. Дело в апи, но тут важен сам концепт + данные тянутся каждые 10 минут'},
  {id: 3, title: 'PostsList', href: '/medium/posts-list', decsription: 'Список постов с поиском. Установлен setTimeout на 1 секунду для имитации загрузки при поиске'},
]

const hardLinkList = [
  {id: 1, title: 'Authentication', href: '/hard/authentication', decsription: 'ТестАуентификация'},
  {id: 2, title: 'WebSocket', href: '/hard/web-socket', decsription: 'ТестЧат'},
  {id: 3, title: 'Shop', href: '/hard/shop', decsription: 'Магазин'},

]

export default function MainContent() {
    return (
        <>
        <div className='mx-6'>
            <TabGroup manual>
                <TabList className='flex items-center gap-2 justify-between mx-2 my-2 sm:mx-6 sm:my-4'>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white hover:bg-indigo-300">
                        <div className='inline-flex items-center'>
                          <h2 className='tracking-widest text-xl'>Easy</h2>
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIcon className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIcon className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                        </div>
                    </Tab>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white hover:bg-indigo-300">
                    <div className='inline-flex items-center'>
                          <h2 className='tracking-widest text-xl'>Medium</h2>
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIcon className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                        </div>
                    </Tab>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white  hover:bg-indigo-300">
                    <div className='inline-flex items-center'>
                          <h2 className='tracking-widest text-xl'>Hard</h2>
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                        </div>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className=' flex flex-col items-center justify-between sm:grid sm:grid-cols-3 sm:gap-3'>
                          {easyLinkList.map((e) => (
                            <Link key ={e.id} href={e.href}
                            className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                              <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                <h2 className='p-2'>{e.title}</h2>
                              </div>
                              <p className='p-2'>{e.decsription}</p>
                            </Link>
                          ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className=' flex flex-col items-center justify-between sm:grid sm:grid-cols-3 sm:gap-3'>
                    {mediumLinkList.map((e) => (
                            <Link key ={e.id} href={e.href}
                            className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                              <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                <h2 className='p-2'>{e.title}</h2>
                              </div>
                              <p className='p-2'>{e.decsription}</p>
                            </Link>
                          ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className=' flex flex-col items-center justify-between sm:grid sm:grid-cols-3 sm:gap-3'>
                    {hardLinkList.map((e) => (
                            <Link key ={e.id} href={e.href}
                            className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                              <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                <h2 className='p-2'>{e.title}</h2>
                              </div>
                              <p className='p-2'>{e.decsription}</p>
                            </Link>
                          ))}
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
        
        </>
    )
}