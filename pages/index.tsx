import Head from 'next/head'
// import { title } from 'node:process'
import React from 'react'
import { getPreEmitDiagnostics } from 'typescript'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

// const {BLOG_URL, CONTENT_API_KEY} = process.env

type Post = {
  title: string
  slug: string
}

async function getPosts() {
  // curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"
  const res = await fetch(
    'https://www.cms.galen-lewis.tech/ghost/api/v3/content/posts/?key=e549fe0f4a85401eadeeee89db&fields=title,slug,custom_excerpt,reading_time,feature_image').then((res) => res.json())

  const posts = res.posts

  return posts
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts()
  return {
    props: {posts}
  }
}

const Home:React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, welcome to my personal site! I plan to write every week about startups, technology, and UX design.</p>
        <p>A bit about me: I'm a Co-Founder at Mark Labs (venture-backed software company in the ESG space) and a Fellow at Glynn Capital (VC in Silicon Valley). I've worked across Product, Sales, and Marketing at Posh Technologies, a growth-stage conversational AI company. I'm currently an undergrad at Harvard where I study Computer Science and Psychology.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
      <section>
        <ul>
          {posts.map((post, index) => {
            return <li key={post.slug}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a>{post.title}</a>
                </Link></li>
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default Home
