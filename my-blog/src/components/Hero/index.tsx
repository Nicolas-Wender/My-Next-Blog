'use client'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="mt-32 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8 ">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-gray-800 font-bold text-5xl xl:text-6xl">
            Your favorite Blog
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 text-xl">
            It is a long established fact that a reader will be distracted by
          </p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end mt-4 lg:mt-0 lg:ml-3 ">
          <Image
          className=''
            src="/The-Little-Things-Working.png" // Caminho relativo ao diretório 'public'
            alt="Descrição da imagem"
            width={300} // Largura da imagem
            height={300} // Altura da imagem
          />
        </div>
      </section>
    </>
  )
}
