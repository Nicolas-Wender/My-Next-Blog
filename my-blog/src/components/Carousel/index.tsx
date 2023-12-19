'use client'
import React from 'react'
import { post } from '@/types/post'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import formDate from '@/utils/formDate'
import Link from 'next/link'
import { CustomBulletsSwiper } from '@/types/customBulletsSwiper'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Carousel({ slides }: { slides: post[] }) {
  return (
    <section className="py-12 md:py-24">
      <div className="md:max-w-screen-xl md:mx-auto md:text-center md:px-8 ">
        <Swiper
          style={
            {
              '--swiper-pagination-color': '#fafafa',
              '--swiper-pagination-bullet-size': '10px',
              '--swiper-pagination-bullet-inactive-color': '#999999'
            } as CustomBulletsSwiper
          }
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
          {slides.slice(0, 5).map(slide => (
            <SwiperSlide key={slide.slug}>
              <Link href={`/posts/${slide.slug}`}>
                <div className="max-w-screen-xl mx-auto mb-10 md:rounded-xl overflow-hidden">
                  <div className="relative lg:flex">
                    <div className="absolute h-full lg:h-auto w-full md:flex md:flex-col md:justify-center bg-[rgba(24,24,27,0.8)] lg:bg-zinc-900 md:text-start p-10 lg:relative lg:w-1/3 lg:py-32">
                      <h3 className="text-white text-sm">
                        {slide.author} • {formDate(slide.date)}
                      </h3>
                      <p className="text-white text-3xl font-bold sm:text-4xl my-3 overflow-hidden text-ellipsis line-clamp-3 box-content">
                        {slide.title}
                      </p>
                      <p className="hidden md:inline-flex lg:hidden md:my-10 text-white overflow-hidden text-ellipsis line-clamp-4 box-content">
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
                    <div className="w-full space-y-3 lg:w-2/3 bg-zinc-900  ">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-full lg:rounded-xl"
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
