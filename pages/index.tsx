import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'
import NavBar from '../components/navBar'
import Projects from '../components/projectsContainer'
import { createRef, useRef } from 'react'


interface MutableRefObject<T> {
  current: T | null
}

const Home: NextPage = () => {
  const projectsRef: any = useRef<HTMLDivElement>(null)
  const onScrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title >Shrihari</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className='flex justify-center flex-col mx-auto scroll-smooth' data-scroll-container>

        <NavBar />

        <div className='snap snap-y snap-proximity'>

          <section className='snap-start relative' >
            <Landing onSeeProjects={onScrollToProjects} />
          </section>

          <section className='snap-start relative'>
            <Projects ref={projectsRef} />
          </section>

        </div>

      </main>

    </>
  )
}

export default Home
