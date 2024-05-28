'use client'
import PopoverHeader from "./PopoverHeader"
import { motion } from "framer-motion"
import Link from "next/link";


export default function header() {
    return <>
        <header className="bg-indigo-300 border-b-2 border-indigo-400 shadow-lg p-2">

          <nav className="flex justify-between items-center w-[92%] m-auto">
            <div>
              <Link href='/'>
                <svg xmlns='https://www.w3.org/2000/org'
                viewBox='0 0 24 24'
                className='w-12'>
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"></path>
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"></path>
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"></path>
                </svg>
              </Link>
            </div>
            <div>
              <ul className="hidden sm:flex items-center gap-[4vw]">
                <li className="hover:text-gray-500 cursor-pointer group relative">
                  <div className="px-10 hover:bg-indigo-400 rounded-t">easy</div>
                  <ul className="absolute hidden bg-slate-600 text-white p-6 group-hover:block">
                    <div className="flex flex-col text-nowrap">
                      <li>
                        <Link href='/easy/task'>
                          <div className="hover:bg-indigo-300 px-6 rounded">task</div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/easy/counter'>
                          <div className="hover:bg-indigo-300 px-6 rounded">counter</div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/easy/calculator'>
                          <div className="hover:bg-indigo-300 px-6 rounded">calculator</div>
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="hover:text-gray-500 cursor-pointer group relative">
                  <div className="px-10 hover:bg-indigo-400 rounded-t">medium</div>
                  <ul className="absolute hidden bg-slate-600 text-white p-6 group-hover:block">
                    <div className="flex flex-col text-nowrap">
                      <li>
                        <Link href='/medium/test-animation'>
                          <div className="hover:bg-indigo-300 px-6 rounded">test-animation</div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/medium/test-api'>
                          <div className="hover:bg-indigo-300 px-6 rounded">test-api</div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/medium/posts-list'>
                          <div className="hover:bg-indigo-300 px-6 rounded">posts-list</div>
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="hover:text-gray-500 cursor-pointer group relative">
                  <div className="px-10 hover:bg-indigo-400 rounded-t">hard</div>
                  <ul className="absolute hidden bg-slate-600 text-white p-6 group-hover:block">
                    <div className="flex flex-col text-nowrap">
                      <li>
                        <Link href='/hard/'>
                          <div className="hover:bg-indigo-300 px-6 rounded">_3</div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/hard/'>
                          <div className="hover:bg-indigo-300 px-6 rounded">_3</div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/hard/'>
                          <div className="hover:bg-indigo-300 px-6 rounded">_3</div>
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>

            <div className='flex grow items-center justify-end sm:hidden'>

            <PopoverHeader />
            

            </div>

            <div className="hidden sm:block">
              <motion.button className="bg-fuchsia-300 text-slate-100 px-5 py-2 rounded-3xl border-2 border-fuchsia-500"
              whileTap={{scale: 0.9}}
              whileHover={{scale:1.1, backgroundColor: 'rgb(217 70 239)', color: 'black'}}
              transition={{bounceDamping: 10, bounceStiffness: 600}}
              >sign In
              </motion.button>
            </div>

          </nav>
        </header>
    </>
}

