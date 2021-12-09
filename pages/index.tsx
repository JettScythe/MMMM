import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

declare var window: any;
const Home: NextPage = () => {
  const [log, setLog] = useState<string[]>([])
  const addToken = (params: any) =>
    window.ethereum.request({ method: 'wallet_watchAsset', params })
      .then(() => setLog([...log, 'Success, Token added!']))
      .catch((error: Error) => setLog([...log, `Error: ${error.message}`]))


  useEffect(() => {
    const bigP: HTMLMediaElement = document.getElementById('audio') as HTMLMediaElement
    document.body.addEventListener("click", () => {bigP!.play()})
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
          <button><a href="https://t.me/M00Nx4" target="_blank" rel="noreferrer">Chat (English)</a></button>
          <button><a href="https://t.me/+WGAq30oCEoExMGRl" target="_blank" rel="noreferrer">聊天（中文)</a></button>
          <button><a href="https://t.co/nQYHt3Uw1T" target="_blank" rel="noreferrer">Roadmap</a></button>
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
          <div>
            <h3>Q. The roadmap button doesn&apos;t direct me to the right place, what gives?</h3>
            <p>A. Sometimes there are DNS issues, try this <button><a href="https://www.theraleighregister.com/the-2021-to-infinity--roadmap.html" target="_blank" rel="noreferrer">roadmap </a> </button> instead.</p>
          </div>
        </div>
      </main>
      <div>
        <audio id="audio" src="/bigpimpin1.mp3" />
      </div>
    </div>
  )
}

export default Home
