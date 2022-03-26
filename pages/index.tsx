import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'
import NavBar from '../components/navBar'
import Projects from '../components/projectsContainer'
import { createRef, useEffect, useRef, useState } from 'react'
import SplashScreen from '../components/splashScreen'


interface MutableRefObject<T> {
  current: T | null
}

const Home: NextPage = () => {
  const projectsRef: any = useRef<HTMLDivElement>(null)
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true)
  const onScrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // if (sessionStorage.getItem("showSplashScreen")) {
    //   setShowSplashScreen(false)
    // }
    // else {
    setTimeout(() => {
      sessionStorage.setItem("showSplashScreen", "false");
      setShowSplashScreen(false)
    }, 3000);
    // }
  })

  return (
    <>
      <Head>
        <title >Shrihari</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="theme-color" content="#22d3ee" />
        <meta name="title" content="Shrihari M" />
        <meta name="description" content="Wabba Lubba Dubb Dub" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shrihari M" />
        <meta property="og:description" content="Wabba Lubba Dubb Dub" />
        <meta property="og:image" content="https://i.ibb.co/tzRTstD/shrihari-portfolio-og-image.png" />
        <meta property="og:url" content="https://shrihari-portfolio.vercel.app/" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shrihari-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Shrihari M" />
        <meta property="twitter:description" content="Wabba Lubba Dubb Dub" />
        <meta property="twitter:image" content="https://i.ibb.co/tzRTstD/shrihari-portfolio-og-image.png" />

      </Head>

      <main className='flex justify-center flex-col mx-auto scroll-smooth' data-scroll-container>

        {showSplashScreen ?
          <SplashScreen /> :
          <>
            <NavBar />
            <div className='snap snap-y snap-proximity'>
              <section className='snap-start relative' >
                <Landing onSeeProjects={onScrollToProjects} />
              </section>

              <section className='snap-start relative'>
                <Projects ref={projectsRef} />
              </section>
            </div>
          </>
        }
      </main>

    </>
  )
}

export default Home
