import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

declare var window: any;
const Home: NextPage = () => {
  const [log, setLog] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const addToken = (params: any) =>
    window.ethereum.request({ method: 'wallet_watchAsset', params })
      .then(() => setLog([...log, 'Success, Token added!']))
      .catch((error: Error) => setLog([...log, `Error: ${error.message}`]))

  const toggleAudio = () => {
      if (isPlaying) {
        document.getElementById('audio').pause()
        setIsPlaying(false)
      } else {
        document.getElementById('audio').play()
        setIsPlaying(true)
      }
    }

  useEffect(() => {
    setTimeout(() => {
      toggleAudio()
    }, 1000)
  }, [])


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
          <button><a href="https://t.me/M00Nx4" target="_blank">TG</a></button>
        </p>
        <div className={styles.faq}>
          <h2>FAQ: </h2>
          <div>
            <h3> Q. What is the story about 🌙🌙🌙🌙? </h3>
            <p>A. There is only 1000. That is all. </p>
          </div>
          <div>
            <h3>Q. Is 🌙🌙🌙🌙 a meme?</h3>
            <p>A. No it is a memememememememe.</p>
          </div>
        </div>
      </main>
      <div>
        <audio id="audio" src="/bigpimpin1.mp3" autoPlay={isPlaying} />
      </div>
    </div>
  )
}

export default Home
