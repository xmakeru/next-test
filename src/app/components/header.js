'use client'
import PopoverHeader from "./PopoverHeader"
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function header() {
    return <>
        <header className="bg-indigo-300">

          <nav className="flex justify-between items-center w-[92%] m-auto">
            <div>
              <Link href='/'>
                <AcademicCapIcon className="h-10 w-10 text-black-500" />
              </Link>
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
              <button className="bg-fuchsia-300 text-white px-5 py-2 rounded-3xl hover:bg-fuchsia-400">Sign In</button>
            </div>

          </nav>
        </header>
    </>
}

