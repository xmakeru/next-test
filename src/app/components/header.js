'use client'
import PopoverHeader from "./PopoverHeader"
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function header() {
    return <>
        <header className="bg-yellow-500">

          <nav className="flex justify-between items-center w-[92%] ml-auto">
            <div>
            <AcademicCapIcon className="h-10 w-10 text-black-500" />
            </div>
            <div>
              <ul className="hidden sm:flex items-center gap-[4vw]">
                <li className="hover:text-gray-500 cursor-pointer">
                  1
                </li>
                <li className="hover:text-gray-500 cursor-pointer">
                  22
                </li>
                <li className="hover:text-gray-500 cursor-pointer">
                  333
                </li>
                <li className="hover:text-gray-500 cursor-pointer">
                  4444
                </li>
              </ul>
            </div>

            <div className='flex grow items-center justify-end sm:hidden'>

            <PopoverHeader />
            

            </div>

            <div className="hidden sm:block">
              <button className="bg-[#9DF7E5] text-white px-5 py-2 rounded-3xl hover:bg-[#78deca] cursor-pointer">Sign In</button>
            </div>

          </nav>
        </header>
    </>
}

