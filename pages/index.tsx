import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'
import NavBar from '../components/navBar'
import Projects from '../components/projectsContainer'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title >Shrihari</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className='flex justify-center flex-col mx-auto  scroll-smooth' data-scroll-container>
        <NavBar />
        <Landing />
        <Projects />
      </main>

    </>
  )
}

export default Home
