import Meta from "components/meta"
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Accordion from "components/accordion"
import Image from "next/image"
// import eyecatch from "images/about.jpg"
import BlueFrame from 'components/blue-frame'

const eyecatch = {
  src: 'https://images.microcms-assets.io/assets/af83e807727c456e9b72e2330a2580e4/850f7c10ed604be4a74e88e5df4335c3/about.jpg',
  height: 960,
  width: 1920,
  blurDataURL: 'data:image/jpeg;base64,',
}

export default function About(){
    return (
    <Container>
      <Meta pageTitle="アバウト"
            pageDesc="About development activities"
            pageImg={eyecatch.src}
            pageImgW={eyecatch.width}
            pageImgH={eyecatch.height}/>
      <Hero 
              title="About"
              subtitle="About development activities"/>
        <figure>
          
          <Image 
             src={eyecatch}
             alt=""
             width="1156"
             height="600"
            
             priority
             placeholder='blur'

             />
        </figure>
    <TwoColumn>
     
    <TwoColumnMain>     
    <PostBody>
       <p>
        abcdefg
         Cubeが得意とする分野はモノづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざま
         な技術をくみあわせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
       </p>
       <h2>モノづくりで目指していること</h2>
       <p>
       Cubeが得意とする分野はモノづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざま
         な技術をくみあわせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
       </p>
       <p>
       Cubeが得意とする分野はモノづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざま
         な技術をくみあわせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
       </p>
       <h3>新しいことへのチャレンジ</h3>
       <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ea repellat minima dolores sunt corporis molestiae modi saepe dolor expedita? Quasi distinctio aut ab nobis veritatis, possimus magnam animi error?
       </p>
       <h2>FAQ</h2>
       <Accordion heading="プログラミングのポイントについて">
        <p>
          プログラミングのポイントは、つくりたいものを作ることです。楽しいいことから思いつき
          目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
        </p>
       </Accordion>
       <Accordion heading="古代語の解読について">
        <p>古代語をLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, incidunt consequatur? Molestias voluptates neque voluptatem impedit eaque quia, voluptatum doloremque? Soluta dicta incidunt quidem necessitatibus earum libero eos, ipsa consequuntur!</p>
       </Accordion>
       <Accordion heading="公開リポジトリについて">
        <p>公開リポジトリを活用するとLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio repellat beatae repudiandae molestiae odio consequatur tenetur sit perferendis recusandae officiis, excepturi, libero quam qui necessitatibus voluptatibus tempore aliquam eum!</p>
       </Accordion>
       </PostBody>
       </TwoColumnMain>  

       <TwoColumnSidebar>
       <Contact />
       </TwoColumnSidebar>
       </TwoColumn> 
    </Container>
)         
}
About.getLayout = function getLayout(page){
  return <BlueFrame>{page}</BlueFrame>
}