import React from 'react'
import Image from 'next/image'
import getPostContent from '@/services/getPostContent'
import Markdown from 'markdown-to-jsx'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPostContent(slug)

  return (
    <div className="px-6 lg:px-0  py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-base font-semibold leading-7 text-white">
          {post.data.author} • {post.data.date}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {post.data.title}
        </h1>
        <p className="mt-6 text-xl leading-8 text-white mb-4">
          {post.data.desc}
        </p>
        <Image
          className="w-auto h-auto my-6 mx-auto"
          src={post.data.img}
          alt="Descrição da imagem"
          width={300}
          height={300}
        />
        <article className="prose md:prose-xl text-white prose-headings:text-white prose-blockquote:text-white prose-a:text-white prose-strong:text-white prose-em:text-white prose-code:text-white">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  )
}
