import { post } from "@/types/post"

export const getPostMetadata = async (slug: number): Promise<post> => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  return res.json()
}