import React from 'react'
import PostCard2 from '../PostCard/PostCard2'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import { getPostMetadataPerPage } from '../PostCard/getPostMetadata'
import { post } from '../PostCard/PostMetadata'
import Link from 'next/link'

export default async function RecentGridPosts() {
  let posts: post[] = await getPostMetadataPerPage(1)

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-left  sm:mx-auto flex items-end justify-between">
          <h1 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Recent blog posts
          </h1>
        </div>
        <div className="mt-6 flex lg:h-[32rem]">
          <Link
            href={`/posts/${posts[0].id}`}
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
                {posts[0].author} • {posts[0].date.toLocaleString()}
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
          </Link>
          <div className="hidden lg:flex h-full w-1/2 lg:flex-col lg:gap-y-8">
            <PostCard2 {...posts[1]} />
            <PostCard2 {...posts[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}
