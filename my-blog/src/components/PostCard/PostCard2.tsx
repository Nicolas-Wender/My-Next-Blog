import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'

interface PostCardProps {
  items: {
    title: string
    desc: string
    img: string
    date: string
    href: string
    autor: string
  }
}
export default function PostCard2({ items }: PostCardProps) {
  return (
    <a className="h-1/2 w-full flex gap-x-4" href={items.href}>
      <Image
        className="w-1/2 "
        src={items.img}
        alt={items.title}
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-y-4 group w-1/2">
        <span className="block text-indigo-600 text-sm font-semibold">
          {items.autor} • {items.date}
        </span>
        <div className="flex justify-between items-start ">
          <h3 className="text-xl text-gray-800 duration-150 w-[90%] font-semibold group-hover:text-indigo-600">
            {items.title}
          </h3>
          <MdArrowOutward className="text-2xl group-hover:text-indigo-600" />
        </div>
        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
          {items.desc}
        </p>
      </div>
    </a>
  )
}
