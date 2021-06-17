import Link from 'next/link'
import {useRouter} from 'next/router'
import utilStyles from '../../styles/utils.module.css'
import config from '../../config'

async function getPost(slug: string) {
        console.log(config)
        const res = await fetch(`${config.blogUrl}/ghost/api/v3/content/posts/slug/${slug}?key=${config.contentApiKey}&fields=title,slug,html,reading_time,feature_image`).then((res) => res.json())
        console.log(res.posts)
        const posts = res.posts
    
      return posts[0]
}

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug)
    return {
      props: {post}
    }
  }

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

type Post = {
    title: string
    html: string
    slug: string
}

const Post: React.FC<{post: Post}> = (props) => {

    const { post } = props

    const router = useRouter()

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={utilStyles.container}>
            <Link href="/">
                <a>Go Back</a>
            </Link>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </div>
    )
}

export default Post