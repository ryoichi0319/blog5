import { getAllPosts } from 'lib/api'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

export default function Home({posts}) {
  return (

    <Container>
      <Meta />
       <Hero 
          title="Cube"
          subtitle="アウトプットしていくサイト"
          imageOn
          />
        <Posts posts={posts} />
        <Pagination nextUrl="/blog" nextText='More Posts' />
      </Container>
  )
}

export async function getStaticProps(){
  const url = 'https://images.microcms-assets.io/assets/af83e807727c456e9b72e2330a2580e4/850f7c10ed604be4a74e88e5df4335c3/about.jpg'
  console.log(await getPlaiceholder(url))
  const posts = await getAllPosts(4)

  for(const post of posts){
    if(!post.hasOwnProperty('eyecatch')){
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64

  }
  return {
    props: {
      posts: posts,
    },
  }
}