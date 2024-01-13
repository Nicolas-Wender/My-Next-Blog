import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <section className="relative mt-28 md:mt-44 mx-auto max-w-screen-xl pb-4 px-4 md:px-8 ">
        <div className="space-y-4 text-center flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-4xl xl:text-7xl">
            About Me...
          </h1>
          <p className="hidden md:block text-white leading-relaxed text-xl font-light max-w-lg">
            It is a long established fact that a reader will be distracted by
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-28">
          <div className="grid gap-12 sm:gap-20 lg:grid-cols-2 justify-items-center">
            <div className="flex flex-col items-start gap-6">
              <p className="text-sm text-white sm:text-xl font-light">
                Developer &amp; UX Specialist 🚀
              </p>

              <h1 className="mb-6 text-4xl text-white font-bold md:text-7xl lg:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                Jonathan Smith
              </h1>
              <p className="text-base text-white sm:text-lg font-">
                {' '}
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
                bibendum ut. Vestibulum lorem sed risus ultricies tristique
                nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae
                elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est
                pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus.
                <br />
                <br />
                Massa id neque aliquam vestibulum morbi blandit. Nulla
                pellentesque dignissim enim sit amet venenatis.
              </p>
            </div>

            <Image
              src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem do autor"
              className="w-full min-h-[17rem] max-w-[22rem] lg:max-w-full rounded-md "
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  )
}