import GridPosts from '@/components/GridPosts'
import Hero from '@/components/Hero'
import RecentGridPosts from '@/components/RecentGridPosts'
export default async function Home({
  searchParams
}: {
  searchParams: { page: string }
}) {
  const page = parseInt(searchParams.page) || 1 

  return (
    <>
      <Hero />
      <RecentGridPosts />
      <GridPosts page={page} />
    </>
  )
}
