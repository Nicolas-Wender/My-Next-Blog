import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'
import { post } from '@/types/post'
import formDate from '@/utils/formDate'

export default function PostCard(post: post) {
  return (
    <li className="w-full mx-auto sm:max-w-sm bg-zinc-900 rounded-xl overflow-hidden group">
      <Link href={`/posts/${post.slug}`}>
        <Image
          className="w-full h-52 xl:h-64 rounded-xl"
          src={post.img}
          alt={post.title}
          width={300}
          height={300}
        />
        <div className="space-y-3  p-7">
          <span className="block text-white text-sm font-extralight">
            {post.author} • {formDate(post.date)}
          </span>

          <div className="flex justify-between items-start ">
            <h3 className="text-2xl text-white w-[90%] font-bold overflow-hidden text-ellipsis line-clamp-3 box-content group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#4F46E5] to-[#E114E5] duration-300">
              {post.title}
            </h3>
            <MdArrowOutward className="text-2xl text-white group-hover:text-[#E114E5]" />
          </div>

          <p className="text-white text-base font-light overflow-hidden text-ellipsis line-clamp-3 box-content">
            {post.desc}
          </p>
        </div>
      </Link>
    </li>
  )
}
