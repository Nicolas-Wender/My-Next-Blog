import Carousel from '@/components/Carousel'
import GridPosts from '@/components/GridPosts'
import Hero from '@/components/Hero'
import getPostMetadataMarkDown from '@/services/getPostMetadataMarkdown'
import { post } from '@/types/post'

export default function Home() {
  const posts: post[] = getPostMetadataMarkDown()

  return (
    <>
      <Hero />
      <Carousel slides={posts} />
      <GridPosts posts={posts} />
    </>
  )
}
