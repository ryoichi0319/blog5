import Container from 'components/container'
import React from 'react'
import Hero from 'components/hero'
import Meta from 'components/meta'
import { getAllPosts } from 'lib/api'

export default function Blog({posts}){
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧"/>
    <Hero 
       title="Blog"
       subtitle="Recent Posts"
       />
    </Container>
  )
}
export async function getStaticProps(){
  const posts = await getAllPosts()
  return {
    props: {
      posts: posts,
    },
  }
}

