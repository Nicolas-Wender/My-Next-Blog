import React from 'react'
import PostCard from '../PostCard'
import { post } from '@/types/post'
import getPostMetadataMarkDown from '@/services/getPostMetadataMarkdown'

export default async function GridPosts() {
  const posts: post[] = getPostMetadataMarkDown()

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-left  sm:mx-auto flex items-end justify-between">
          <h1 className="text-white text-xl font-bold sm:text-2xl">
            My blog posts:
          </h1>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </ul>
      </div>
    </section>
  )
}
