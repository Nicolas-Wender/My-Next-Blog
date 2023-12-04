import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'

interface PostCardProps {
  items: {
    title: string
    desc: string
    img: string
    date: string
    id: string
    autor: string
  }
}
// de um exemplo de tipagem em typescript em funções?
export default function PostCard({ items }: PostCardProps) {
  return (
    <li className="w-full mx-auto sm:max-w-sm">
      <Link href={`/posts/${items.id}`}>
        <Image
          className="w-full"
          src={items.img}
          alt={items.title}
          width={300}
          height={300}
        />
        <div className="mt-8 space-y-3 group">
          <span className="block text-indigo-600 text-sm font-semibold">
            {items.autor} • {items.date}
          </span>
          <div className="flex justify-between items-start ">
            <h3 className="text-2xl text-gray-800 duration-150 w-[90%] font-semibold group-hover:text-indigo-600">
              {items.title}
            </h3>
            <MdArrowOutward className="text-2xl group-hover:text-indigo-600" />
          </div>

          <p className="text-gray-600 text-base duration-150 group-hover:text-gray-800">
            {items.desc}
          </p>
        </div>
      </Link>
    </li>
  )
}
