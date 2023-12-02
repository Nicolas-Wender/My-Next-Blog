import GridPosts from '@/components/GridPosts'
import Hero from '@/components/Hero'
import RecentGridPosts from '@/components/RecentGridPosts'

export default function Home() {
  return (
    <>
      <Hero />
      <RecentGridPosts />
      <GridPosts />
    </>
  )
}
