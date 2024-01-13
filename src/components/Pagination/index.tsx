import React from 'react'

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages
}: {
  currentPage: number
  setCurrentPage: Function
  totalPages: number
}) {
  const arrayPages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const take = currentPage - 2 < 0 ? 0 : currentPage - 2
  const skip = take + 3 >= totalPages ? totalPages : take + 3

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4md:px-8 text-white">
      <div
        className="hidden items-center justify-between sm:flex"
        aria-label="Pagination"
      >
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="text-white flex items-center gap-x-2 disabled:text-zinc-600 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </button>
        <ul className="flex items-center gap-1">
          {currentPage >= 3 && <div>...</div>}
          {arrayPages.slice(take, skip).map(item => (
            <li key={item} className="text-sm">
              <button
                onClick={() => setCurrentPage(item)}
                aria-current={currentPage == item ? 'page' : false}
                className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-zinc-900 ${
                  currentPage == item
                    ? 'bg-zinc-900 text-white font-medium'
                    : ''
                }`}
              >
                {item}
              </button>
            </li>
          ))}
          {currentPage < totalPages - 1 && <div>...</div>}
        </ul>
        <button
          disabled={currentPage == totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="text-white flex items-center gap-x-2 disabled:text-zinc-600"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-white px-6 font-medium sm:hidden">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-white hover:text-zinc-950 hover:font-bold"
        >
          Previous
        </button>
        <div className="font-medium">
          Page {currentPage} of {arrayPages.length}
        </div>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-white hover:text-zinc-950 hover:font-bold"
        >
          Next
        </button>
      </div>
    </div>
  )
}
