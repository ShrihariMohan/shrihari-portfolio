import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/Landing/landing'
import NavBar from '../components/Navbar/navBar'
import { useEffect, useRef, useState } from 'react'
import SplashScreen from '../components/UI components/splashScreen'
import OpenSourceProjects from '../components/Project_Details/opensourceProjects'
import Footer from '../components/Footer/footer'
import AddToMailList from '../components/Container/addToMailList';
import NandhiAndMining from '../components/Project_Details/nandhiAndMining'
import ShowCaseContainer from '../components/Container/showCaseContainer'

const Home: NextPage = () => {
  const projectsRef: any = useRef<HTMLDivElement>(null);
  const aboutRef: any = useRef<HTMLDivElement>(null);

  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);

  const onScrollToProjects = () => {
    let block = "start";
    if (window.screen.width > 768) block = "center";
    projectsRef.current.scrollIntoView({ behavior: "smooth", block });
  };

  const onScrollToabout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    // if (sessionStorage.getItem("showSplashScreen")) {
    //   setShowSplashScreen(false)
    // }
    // else {
    setTimeout(() => {
      sessionStorage.setItem("showSplashScreen", "false");
      setShowSplashScreen(false);
    }, 1);
    // }
  }, []);

  return (
    <>
      <Head>
        <title>Shrihari</title>
        <meta name="theme-color" content="#22d3ee" />
        <meta name="title" content="Shrihari M" />
        <meta name="description" content="Wabba Lubba Dubb Dub" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shrihari M" />
        <meta property="og:description" content="Wabba Lubba Dubb Dub" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/shrihari-personal-storage.appspot.com/o/shrihari-portfolio-og-image.png?alt=media&token=6ca79577-e6c5-4eba-8cf8-07f6945911d9"
        />
        <meta
          property="og:url"
          content="https://shrihari-portfolio.vercel.app/"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://shrihari-portfolio.vercel.app/"
        />
        <meta property="twitter:title" content="Shrihari M" />
        <meta property="twitter:description" content="Wabba Lubba Dubb Dub" />
        <meta
          property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/shrihari-personal-storage.appspot.com/o/shrihari-portfolio-og-image.png?alt=media&token=6ca79577-e6c5-4eba-8cf8-07f6945911d9"
        />

        <link
          rel="icon"
          href="https://img.icons8.com/color/48/000000/morty-smith.png"
          type="image/x-icon"
        ></link>
      </Head>

      <main
        className="flex justify-center flex-col mx-auto scroll-smooth"
        data-scroll-container
      >
        {showSplashScreen ? (
          <SplashScreen />
        ) : (
          <>
            <NavBar onSeeAbout={onScrollToabout} />

            <section className=" mb-24">
              <Landing onSeeProjects={onScrollToProjects} />
            </section>

            <section>
              <OpenSourceProjects ref={projectsRef} />
            </section>

              <section>
                <ShowCaseContainer videoLink='' title='' description='Ghost CSS Detector' />
              </section>

            <section>
              <NandhiAndMining />
            </section>

            <section>
              <Footer ref={aboutRef} />
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default Home
