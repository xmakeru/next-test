'use client'
import { Tab } from '@headlessui/react'
import Link from 'next/link'

export default function MainContent() {
    return (
        <>
        <div className='mx-6'>
            <Tab.Group manual>
                <Tab.List className='flex items-center gap-2 justify-between mx-2 my-2 sm:mx-6 sm:my-4'>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white hover:bg-indigo-300">
                        <h2 className='tracking-widest text-xl'>Easy</h2>
                    </Tab>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white hover:bg-indigo-300">
                        <h2 className='tracking-widest text-xl'>Normal</h2>
                    </Tab>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white  hover:bg-indigo-300">
                        <h2 className='tracking-widest text-xl'>Hard</h2>
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className='flex flex-col sm:flex-row items-center justify-between'>
                            <Link href='./task' className='bg-sky-100 rounded-md sm:w-1/3 h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'> 
                                  <h2 className='p-2'>TaskToDoList</h2>
                                </div>
                                <p>Список задач</p>
                            </Link>
                            <Link href='./counter' className='bg-sky-100 rounded-md sm:w-1/3 h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                  <h2 className='p-2'>Counter</h2>
                                </div>
                                <p>Счетчик</p>
                            </Link>
                            <Link href='./calculator' className='bg-sky-100 rounded-md sm:w-1/3 h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                  <h2 className='p-2'>Calculator</h2>
                                </div>
                                <p>Калькулятор</p>
                            </Link>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-between'>
                            <Link href='./image-slider' className='bg-sky-100 rounded-md sm:w-1/3 h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'> 
                                  <h2 className='p-2'>ImageSlider</h2>
                                </div>
                                <p>Слайдер картинок</p>
                            </Link>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <h3>Content2</h3>
                    </Tab.Panel>
                    <Tab.Panel>
                      <h3>Content3</h3>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
        
        </>
    )
}