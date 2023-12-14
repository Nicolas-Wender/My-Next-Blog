import { post } from "@/types/post"


export const getPostMetadataPerPage = async (page: number): Promise<post[]> => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`)

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  return res.json()
}

