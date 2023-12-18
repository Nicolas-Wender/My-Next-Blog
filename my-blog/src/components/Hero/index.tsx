'use client'
import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="relative mt-28 md:mt-44 mx-auto max-w-screen-xl pb-4 px-4 md:px-8 ">
        <div className="space-y-4 text-center flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-4xl xl:text-7xl">
            Welcome to my blog
          </h1>
          <p className="hidden md:block text-white leading-relaxed text-xl font-light max-w-lg">
            It is a long established fact that a reader will be distracted by
          </p>
        </div>
      </section>
    </>
  )
}
