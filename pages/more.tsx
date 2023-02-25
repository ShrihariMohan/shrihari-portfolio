import { NextPage } from "next"
import Image from "next/image"
import { useRef } from "react"
import CarouselContainer from "../components/Carousel/Carousel"
import MedionAndForumContainer from "../components/Container/medionAndForumContainer"
import Footer from "../components/Footer/footer"
import NavBar from "../components/Navbar/navBar"
import AboveTitle from "../components/Typograpy/aboveTitle"


const Random: NextPage = () => {
  const aboutRef: any = useRef<HTMLElement>(null)

  const onScrollToABout = () => {
    let block = 'start'
    if (window.screen.width > 768) block = 'center'
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block })
  }
  return (

    <>
      <NavBar showRandomItems={false} onSeeAbout={onScrollToABout} />

      <section>
        <MedionAndForumContainer />
      </section>

      <section className="p-4">
        <CarouselContainer />
      </section>

      <section style={{ minHeight: '70vh' }} className="flex flex-col justify-center items-center">
        <AboveTitle text="Wabba Lubba Dubb Dubb" />
        <p className="text-3xl font-semibold  tracking-wide mb-6"> More things coming soon 🛠️</p>
        <picture>
          <Image src='/under_construction.svg' width={600} height={400} alt='illustration under construction' />
          <p className="text-slate-500 text-xs text-center"> Art from <a className="text-slate-400 underline" href="https://undraw.co/" target='_blank' rel="noreferrer"> undraw</a></p>
        </picture>
      </section>
      <Footer ref={aboutRef} />

    </>
  )
}

export default Random