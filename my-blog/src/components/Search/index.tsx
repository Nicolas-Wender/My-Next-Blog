import React from 'react'

export default function Search({
  setSearchParams
}: {
  setSearchParams: Function
}) {
  return (
    <div className="max-w-screen-2xl mx-auto pt-4">
      <div className="max-w-lg">
        <h3 className="text-white text-2xl font-bold">
          Descubra bons posts aqui
        </h3>
        <p className="text-white mt-3">
          Lorem Ipsum text of the printing and typesetting industry.
        </p>
      </div>
      <div className="gap-x-4 py-4 flex mt-6">
        <div className="relative md:w-3/5 lg:w-2/5 w-full">
          <input
            type="text"
            placeholder="Pesquise seu post"
            className="w-full pl-12 pr-3 py-3 text-white font-semibold bg-zinc-900 outline-none rounded-full"
            onChange={e => setSearchParams(e.target.value)}
          />
          <svg
            className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="text-white hidden lg:inline-block"></div>
      </div>
    </div>
  )
}
