import { NextResponse } from 'next/server'
import prisma from '../../index'

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
): Promise<NextResponse> => {
  const slug = parseInt(params.slug)
  try {
    const post = await prisma.post.findUnique({
      where: { id: slug }
    })
    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    )
  }
}
