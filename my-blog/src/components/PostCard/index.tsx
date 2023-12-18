import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'
import { post } from '@/types/post'
import formDate from '@/utils/formDate'

const groupHoverPost = ` group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#4F46E5] to-[#E114E5] duration-300`

export default function PostCard(item: post) {
  return (
    <li className="w-full mx-auto sm:max-w-sm bg-zinc-900 rounded-xl overflow-hidden group">
      <Link href={`/posts/${item.id}`}>
        <Image
          className="w-full rounded-xl"
          src={item.img}
          alt={item.title}
          width={300}
          height={300}
        />
        <div className="space-y-3  p-7">
          <span className="block text-white text-sm font-extralight">
            {item.author} • {formDate(item.date)}
          </span>

          <div className="flex justify-between items-start ">
            <h3
              className={
                'text-2xl text-white duration-150 w-[90%] font-bold' +
                groupHoverPost
              }
            >
              {item.title}
            </h3>
            <MdArrowOutward className="text-2xl text-white group-hover:text-[#E114E5]" />
          </div>

          <p className="text-white text-base duration-150 font-light">
            {item.desc}
          </p>
        </div>
      </Link>
    </li>
  )
}
