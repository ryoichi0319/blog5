import Container from 'components/container'
import React from 'react'
import Hero from 'components/hero'
import Meta from 'components/meta'

const Blog = () => {
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

export default Blog