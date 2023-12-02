import React from 'react'
import PostCard2 from '../PostCard/PostCard2'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'

export default function RecentGridPosts() {
  const posts = [
    {
      title: 'What is SaaS? Software as a Service Explained',
      desc: 'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.',
      img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      date: 'Jan 4 2022',
      href: 'javascript:void(0)',
      autor: 'Demi WIlkinson'
    },
    {
      title: 'A Quick Guide to WordPress Hosting',
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
      img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      date: 'Jan 4 2022',
      href: 'javascript:void(0)',
      autor: 'Candice Wu '
    },
    {
      title: '7 Promising VS Code Extensions Introduced in 2022',
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      date: 'Jan 4 2022',
      href: 'javascript:void(0)',
      autor: 'Demi WIlkinson'
    },
    {
      title: 'How to Use Root C++ Interpreter Shell to Write C++ Programs',
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
      img: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      date: 'Jan 4 2022',
      href: 'javascript:void(0)',
      autor: 'Demi WIlkinson'
    }
  ]
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-left  sm:mx-auto flex items-end justify-between">
          <h1 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Recent blog posts
          </h1>
        </div>
        <div className="mt-6 flex lg:h-[32rem]">
          <a
            href={posts[0].href}
            className="h-full lg:w-1/2 md:gap-x-5 lg:pr-8 md:flex lg:flex-col"
          >
            <Image
              className="w-full lg:h-3/5 md:w-1/2 lg:w-full"
              src={posts[0].img}
              alt={posts[0].title}
              width={300}
              height={300}
            />
            <div className="mt-8 md:mt-0 lg:pt-4 group h-1/2 flex flex-col gap-y-4">
              <span className="block text-indigo-600 text-sm font-semibold">
                {posts[0].autor} • {posts[0].date}
              </span>
              <div className="flex justify-between items-start ">
                <h3 className="text-2xl text-gray-800 duration-150 w-[90%] font-semibold group-hover:text-indigo-600">
                  {posts[0].title}
                </h3>
                <MdArrowOutward className="text-2xl group-hover:text-indigo-600" />
              </div>
              <p className="text-gray-600 text-base duration-150 group-hover:text-gray-800">
                {posts[0].desc}
              </p>
            </div>
          </a>
          <div className="hidden lg:flex h-full w-1/2 lg:flex-col lg:gap-y-8">
            <PostCard2 items={posts[1]} />
            <PostCard2 items={posts[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}
