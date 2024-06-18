import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'

export default function WalletComponent() {
  return(
    <>
    <div className="flex gap-4">
    <Link href='./shop/wallet'
    className='bg-blue-300 rounded-md p-1 hover:bg-blue-500 hover:scale-105 active:scale-75 transition-all duration-200'>перейти в кошелек</Link>
    <Popover 
        className='bg-blue-300 rounded-md hover:bg-blue-500 hover:scale-105 active:scale-75 transition-all duration-200'
        >
          <PopoverButton>
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="w-16 rounded-md p-1 bg-blue-300 hover:bg-blue-500 hover:scale-105 active:scale-75 transition-all duration-200" 
            viewBox="0 0 24 24">
              <path d="M16 12h2v4h-2z"></path>
              <path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path>
            </svg>
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
          <div className="">

          </div>
        </PopoverPanel>
        </Transition>
        </Popover>  
    </div>
    </>
  )
}
