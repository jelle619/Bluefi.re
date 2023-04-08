import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link';

import Form from '/components/form.js';
import Text from '/components/text.js';

export default function HomePage(props) {

  return (
    <Text>
      <h1>Welcome, dragon</h1>
      <p>I've created a corner on the internet to share a bit about myself, as well as showcase things I do or am working on. Feel free to say hi, I promise I won't bite!</p>

      <h1>What's up?</h1>

      <ul>
        {props["posts"].map((post, index) => (
          <li key={post.frontmatter.title}><Link href={"/posts/" + post.slug}>{post.frontmatter.title}</Link></li>
        ))}
      </ul>

      <Link href="/posts">View all posts</Link>

      <h1>Say hi!</h1>
      <Form></Form>
      
    </Text>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  // Get slug and frontmatter from posts
  const posts = markdownFiles.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  const sortedPosts = posts.sort((a, b) => {
    const beforeDate = new Date(a.frontmatter.date)
    const afterDate = new Date(b.frontmatter.date)
    return afterDate - beforeDate
  })

  return {
    props: {
      posts: sortedPosts.slice(0, 3)
    }
  }
}