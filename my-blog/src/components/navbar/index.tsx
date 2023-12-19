'use client'
import { useState } from 'react'
import Link from 'next/link'
import { NavigationItem } from '@/types/navigationItem'

export default function Navbar() {
  const [state, setState] = useState<Boolean>(false)

  const navigation: NavigationItem[] = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/About' },
    { title: 'Newsletter', path: '/Newsletter' }
  ]

  return (
    <nav className="backdrop-blur-sm bg-zinc-950/80 w-full md:text-sm fixed top-0 z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/" className="text-2xl md:text-4xl font-bold text-white">
            MY BLOG
          </Link>

          <div className="md:hidden">
            <button className="text-white" onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 my-8 md:block md:my-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-10 md:space-y-0 text-md">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className={'text-white group'}>
                  <Link
                    href={item.path}
                    className="block text-lg font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#4F46E5] to-[#E114E5] duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
