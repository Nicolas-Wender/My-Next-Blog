import React from 'react'
import PostCard from '../PostCard'
import data from '../../app/api/data.json'
export default function GridPosts() {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-left  sm:mx-auto flex items-end justify-between">
          <h1 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All blog posts
          </h1>
          <a
            href="#"
            className="w-40 text-gray-800 text-base text-center font-bold px-3 py-1.5 bg-slate-200 rounded-2xl"
          >
            View All Posts
          </a>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {data.posts.map(items => (
            <PostCard items={items} />
          ))}
        </ul>
      </div>
    </section>
  )
}
