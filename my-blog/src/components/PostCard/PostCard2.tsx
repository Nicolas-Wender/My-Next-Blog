import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'
import { post } from '@/types/post'

export default function PostCard2(item: post) {
  return (
    <Link className="h-1/2 w-full flex gap-x-4" href={`/posts/${item.id}`}>
      <Image
        className="w-1/2 "
        src={item.img}
        alt={item.title}
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-y-4 group w-1/2">
        <span className="block text-indigo-600 text-sm font-semibold">
          {item.author} • {item.date.toLocaleString()}
        </span>
        <div className="flex justify-between items-start ">
          <h3 className="text-xl text-gray-800 duration-150 w-[90%] font-semibold group-hover:text-indigo-600">
            {item.title}
          </h3>
          <MdArrowOutward className="text-2xl group-hover:text-indigo-600" />
        </div>
        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
          {item.desc}
        </p>
      </div>
    </Link>
  )
}
