import styles from "styles/hero.module.css"
import Image from "next/image"
// import cube from "images/cube.jpg"
const cube = {
  src: 'https://images.microcms-assets.io/assets/af83e807727c456e9b72e2330a2580e4/f662b722d3db4274804d69eecde76c60/cube.jpg',
        height: 1300,
        width: 1500,
        blurDataURL: 'data:image/jpeg;base64,',}
export default function Hero({title, subtitle, imageOn = false}){
    return(
        <div className={styles.flexContainer}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            168 124 171
          </div> 
          {imageOn && (
            <figure className={styles.image}>
              <Image src={cube}
               alt=""
               layout="responsive"
               sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
               priority
               placeholder="blur" 
               style={{transition:"0.2s"}}/>
            </figure>
          )}
        </div>
    )
}