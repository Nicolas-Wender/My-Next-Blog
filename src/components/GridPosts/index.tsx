'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import PostCard from '../PostCard'
import { post } from '@/types/post'
import Search from '../Search'
import Pagination from '../Pagination'

export default function GridPosts({ posts }: { posts: post[] }) {
  const [searchParams, setSearchParams] = useState('')
  const [postsFilter, setPostsFilter] = useState(posts)
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 6
  const totalPages = Math.ceil(posts.length / postPerPage)

  useEffect(() => {
    const newPostsFilter = posts.filter(post => {
      return post.title.toLowerCase().includes(searchParams.toLowerCase())
    })
    setPostsFilter(newPostsFilter)
  }, [searchParams])

  return (
    <section className="py-2">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <Search setSearchParams={setSearchParams} />
        <div className="relative text-center flex justify-center w-full mt-6">
          <span className="absolute inset-0 border-t-2 border-zinc-900 z-0 top-1/2"></span>
          <h1 className="relative z-10 text-white text-xl font-bold sm:text-2xl bg-zinc-950 lg:py-6 px-6">
            My Articles
          </h1>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {postsFilter
            .slice(postPerPage * (currentPage - 1), postPerPage * currentPage)
            .map(post => (
              <PostCard key={post.slug} {...post} />
            ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  )
}