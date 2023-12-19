import React from 'react'

export default function Newsletter() {
  return (
    <section className="max-w-3xl mt-12 mx-auto px-4 md:px-8 h-[84vh] flex flex-col items-center justify-center">
      <div className="space-y-3 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 md:h-24 md:w-24 mx-auto text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
          />
        </svg>
        <h3 className="text-5xl md:text-7xl text-white font-bold">
          Subscribe to our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
            newsletter
          </span>
        </h3>
        <p className="text-white leading-relaxed text-base md:text-xl">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
      </div>
      <div className="mt-6">
        <form className="items-center justify-center sm:flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-zinc-950 w-full p-3 rounded-md border outline-none"
          />

          <button className="px-5 py-3 mt-3 sm:mt-0 sm:mx-3 md:w-36 relative rounded-md group overflow-hidden font-medium text-white bg-zinc-900 inline-block w-full outline-none shadow-md">
            <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-gradient-to-r from-[#4F46E5] to-[#E114E5] group-hover:w-full opacity-90"></span>
            <span className="relative">Subscribe</span>
          </button>
        </form>
        <p className="mt-3 mx-auto text-center max-w-lg text-[12px] md:text-[15px] text-white">
          No spam ever, we are care about the protection of your data. Read our{' '}
          <a className="text-white underline" href="#">
            {' '}
            Privacy Policy{' '}
          </a>
        </p>
      </div>
    </section>
  )
}

//<button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-zinc-900 outline-none shadow-md sm:mt-0 sm:ml-3 sm:w-auto  hover:bg-gradient-to-r from-[#4F46E5] to-[#E114E5] transition duration-300">
//  Subscribe
//</button>
