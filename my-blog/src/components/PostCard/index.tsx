import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'
import { post } from '@/types/post'

export default function PostCard(item: post) {
  return (
    <li className="w-full mx-auto sm:max-w-sm">
      <Link href={`/posts/${item.id}`}>
        <Image
          className="w-full"
          src={item.img}
          alt={item.title}
          width={300}
          height={300}
        />
        <div className="mt-8 space-y-3 group">
          <span className="block text-indigo-600 text-sm font-semibold">
            {item.author} • {new Date(item.date).toLocaleDateString('pt-BR')}
          </span>
          <div className="flex justify-between items-start ">
            <h3 className="text-2xl text-gray-800 duration-150 w-[90%] font-semibold group-hover:text-indigo-600">
              {item.title}
            </h3>
            <MdArrowOutward className="text-2xl group-hover:text-indigo-600" />
          </div>

          <p className="text-gray-600 text-base duration-150 group-hover:text-gray-800">
            {item.desc}
          </p>
        </div>
      </Link>
    </li>
  )
}
