import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

declare var window: any;
const Home: NextPage = () => {
  const [log, setLog] = useState<string[]>([])
  const addToken = (params: any) =>
    window.ethereum.request({ method: 'wallet_watchAsset', params })
      .then(() => setLog([...log, 'Success, Token added!']))
      .catch((error: Error) => setLog([...log, `Error: ${error.message}`]))

  const addMMMMToken = () =>
  addToken({
    type: 'ERC20',
    options: {
      address: '0x2b591190FF951F60CB9424664155e57A402c1AdE',
      symbol: 'MMMM',
      decimals: 3,
      image: 'https://i.imgur.com/GypGIsZ.jpeg'
    }
  })
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
          <br />
          <button onClick={addMMMMToken}>Add 🌙🌙🌙🌙</button>
        </p>
        <div className={styles.faq}>
          <h3>FAQ: </h3>
          <p> What is the story about MMMM?  There is only 1000. That is all.</p>
        </div>
      </main>
    </div>
  )
}

export default Home
