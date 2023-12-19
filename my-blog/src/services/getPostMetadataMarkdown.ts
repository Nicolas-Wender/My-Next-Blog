import fs from 'fs'
import matter from 'gray-matter'
import { post } from '@/types/post'

export default function getPostMetadataMarkDown(): post[] {
  const files = fs.readdirSync('./src/posts/')
  const markdownPosts = files.filter(file => file.endsWith('.md'))

  // Get gray-matter data from each file.
  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`./src/posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
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
