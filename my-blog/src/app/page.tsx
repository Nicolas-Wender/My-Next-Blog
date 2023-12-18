import Carousel from '@/components/Carousel'
import GridPosts from '@/components/GridPosts'
import Hero from '@/components/Hero'
import RecentGridPosts from '@/components/RecentGridPosts'
import { getPostMetadataPerPage } from '@/services/getPostMetadataPerPage'

export default async function Home({
  searchParams
}: {
  searchParams: { page: string }
}) {
  const page = parseInt(searchParams.page) || 1
  const posts = await getPostMetadataPerPage(1)
  return (
    <>
      <Hero />
      <Carousel images={posts} />
      <RecentGridPosts />
      <GridPosts page={page} />
    </>
  )
}
