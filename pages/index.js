import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export default function Home({ allPostsData }) {
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
    </Layout>
  )
}
