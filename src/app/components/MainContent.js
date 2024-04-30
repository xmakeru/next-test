'use client'
import { Tab } from '@headlessui/react'

export default function MainContent() {
    return (
        <>
        <div className='mx-6'>
            <Tab.Group manual>
                <Tab.List className='flex items-center justify-between mx-2 my-2 sm:mx-6 sm:my-4'>
                    <Tab className="ui-selected:bg-blue-500 ui-selected:text-white">
                        <h2>Easy</h2>
                    </Tab>
                    <Tab className="ui-selected:bg-blue-500 ui-selected:text-white">
                        <h2>Normal</h2>
                    </Tab>
                    <Tab className="ui-selected:bg-blue-500 ui-selected:text-white">
                        <h2>Hard</h2>
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                      <h3>Content1</h3>
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