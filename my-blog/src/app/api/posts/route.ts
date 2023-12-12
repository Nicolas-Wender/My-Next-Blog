import { NextResponse } from 'next/server'
import prisma from '../index'

export const GET = async (req: Request): Promise<NextResponse> => {
  const { searchParams } = new URL(req.url)

  const page = searchParams.get('page')

  const POST_PER_PAGE: number = 9
  const skip = (Number(page) - 1) * POST_PER_PAGE

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip
    })
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    )
  }
}
