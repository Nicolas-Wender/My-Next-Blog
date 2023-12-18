'use client'
import React from 'react'
import { post } from '@/types/post'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import formDate from '@/util/formDate'

import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'

export default function Carousel({ images }: { images: post[] }) {
  return (
    <section className="py-28">
      <div className="md:max-w-screen-xl md:mx-auto md:text-center md:px-8 ">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {images.map(image => (
            <SwiperSlide key={image.id}>
              <Link href={`/posts/${image.id}`}>
                <div className="max-w-screen-xl mx-auto border mb-10 md:rounded-3xl overflow-hidden">
                  <div className="relative lg:flex">
                    <div className="absolute h-full lg:h-auto w-full md:flex md:flex-col md:justify-center  md:text-start p-5 lg:relative lg:w-1/3 bg-[rgba(21,26,32,0.7)] lg:bg-[rgba(21,26,32)] lg:py-32">
                      <h3 className="text-white text-sm">
                        {image.author} • {formDate(image.date)}
                      </h3>
                      <p className="text-white text-3xl font-bold sm:text-4xl my-3">
                        {image.title}
                      </p>
                      <p className="hidden md:inline-flex lg:hidden md:my-10 text-white">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum,
                        sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </p>
                      <p className="md:inline-flex gap-x-1 items-center lg:mt-auto text-white font-medium hidden">
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </p>
                    </div>
                    <div className="w-full space-y-3 lg:w-2/3">
                      <img
                        src={image.img}
                        alt={image.title}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
