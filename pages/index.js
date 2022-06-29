import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner"
import Image from 'next/image'

export default function Home() {
  const handleOnBannerBtnClick = () =>{
    console.log("hello banner button!!");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Aesthete</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
       <div className={styles.heroImage}>
        <Image src="/static/hero-image.png" width={300} height={300} />
        </div>
      </main>
    </div>
  )
}
