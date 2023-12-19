import fs from 'fs'
import matter from 'gray-matter'
export default function getPostContent(
  slug: string
): matter.GrayMatterFile<string> {
  const content = fs.readFileSync(`./src/posts/${slug}.md`, 'utf8')
  const matterResult = matter(content)
  return matterResult
}
