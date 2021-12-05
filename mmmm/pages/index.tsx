import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>🌙🌙🌙🌙</title>
        <meta name="description" content="🌙🌙🌙🌙 Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        🌙🌙🌙🌙 Welcome to MMMM 🌙🌙🌙🌙
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>CA: 0x2b591190FF951F60CB9424664155e57A402c1AdE</code>
        </p>

        <div>
          <h3>FAQ: </h3>
          <p> What is the story about MMMM?  There is only 1000. That is all.</p>
        </div>
      </main>
    </div>
  )
}

export default Home
