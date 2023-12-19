import React from 'react'
import PostCard from '../PostCard'
import { post } from '@/types/post'

export default async function GridPosts({ posts }: { posts: post[] }) {
  return (
    <section className="py-2">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="text-left flex items-end justify-between">
          <h1 className="text-white text-xl font-bold sm:text-2xl lg:py-7">
            My blog posts:
          </h1>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </ul>
      </div>
    </section>
  )
}
