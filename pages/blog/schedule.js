import { getPostBySlug } from "lib/api"
import Container from "components/container"

export default function Schedule({
    title,
    publish,
    content,
    q,
    categories,
})


{
    return (
    <Container>
        <h1>{title}</h1>
        
    </Container>
    )
}
export async function getStaticProps(){
    const slug = "micro"
    const post  = await getPostBySlug(slug)

    return {
        
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,

        }
    }
    
}  