
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Markdown from 'markdown-to-jsx'

import Text from '/components/text.js';


export default function PostPage(props) {
    return (
      <Text>
        <h1>{props.frontmatter.title}</h1>
        <Markdown>{props.content}</Markdown>
      </Text>
    )
  }

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const markdownFiles = files.filter((file) => file.endsWith(".md"));
  
    const paths = markdownFiles.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }))
  
    return {
      paths,
      fallback: false,
    }
  }

  export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', slug + '.md'),
      'utf-8'
    )
  
    const { data: frontmatter, content } = matter(markdownWithMeta)
  
    return {
      props: {
        frontmatter,
        slug,
        content,
      },
    }
  }