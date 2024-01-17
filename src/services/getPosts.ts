import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { post } from '@/types/post'

const postsDiretory = join(process.cwd(), 'src/posts')

export function getPostContent(slug: string): matter.GrayMatterFile<string> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDiretory, `${realSlug}.md`)
  const content = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export function getPostMetadataMarkDown(): post[] {
  const files = fs.readdirSync(postsDiretory)

  const markdownPosts = files.filter(file => file.endsWith('.md'))

  const posts = markdownPosts.map(fileName => {
    const matterResult = getPostContent(fileName)

    return {
      slug: fileName.replace('.md', ''),
      title: matterResult.data.title,
      desc: matterResult.data.desc,
      date: matterResult.data.date,
      img: matterResult.data.img,
      author: matterResult.data.author
    }
  })

  return posts
}
