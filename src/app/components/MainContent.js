'use client'
import { Tab } from '@headlessui/react'
import Link from 'next/link'

export default function MainContent() {
    return (
        <>
        <div className='mx-6'>
            <Tab.Group manual>
                <Tab.List className='flex items-center justify-between mx-2 my-2 sm:mx-6 sm:my-4'>
                    <Tab className=" ui-selected:bg-blue-500 ui-selected:text-white">
                        <h2 className='tracking-widest'>Easy</h2>
                    </Tab>
                    <Tab className="ui-selected:bg-blue-500 ui-selected:text-white">
                        <h2 className='tracking-widest'>Normal</h2>
                    </Tab>
                    <Tab className="ui-selected:bg-blue-500 ui-selected:text-white">
                        <h2 className='tracking-widest'>Hard</h2>
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className='flex flex-col sm:flex-row items-center justify-between'>
                            <div className='bg-sky-100 rounded-md sm:w-1/3 h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'> 
                                  <Link href='./task' className='p-2'>TaskToDoList</Link>
                                </div>
                                <p>Список задач</p>
                            </div>
                            <div className='bg-sky-100 rounded-md sm:w-1/3 h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                  <Link href='./counter' className='p-2'>Counter</Link>  
                                </div>
                                <p>Счетчик</p>
                            </div>
                            <div className='bg-sky-100 rounded-md sm:w-1/3 h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                  <Link href='./calculator' className='p-2'>Calculator</Link>
                                </div>
                                <p>Калькулятор</p>
                            </div>
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