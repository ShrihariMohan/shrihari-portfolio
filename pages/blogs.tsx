import { Grid } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import BlogCard from "../components/blogCard";
import BlogLanding from "../components/blogLanding";
import BlogsContainer from "../components/blogsContainer";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Blogs: NextPage = ({ data }: any) => {
  const blogsRef: any = useRef<HTMLElement>(null)
  const aboutRef: any = useRef<HTMLElement>(null)


  const onScrollToBlogs = () => {
    let block = 'start'
    if (window.screen.width > 768) block = 'center'
    blogsRef.current.scrollIntoView({ behavior: 'smooth', block })
  }

  const onScrollToABout = () => {
    let block = 'start'
    if (window.screen.width > 768) block = 'center'
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block })
  }

  return (
    <>
      <Head>
        <title >Shrihari</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="theme-color" content="#22d3ee" />
        <meta name="title" content="Shrihari Blogs" />
        <meta name="description" content="I write stuff on DevTo and Medium" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shrihari Blogs" />
        <meta property="og:description" content="I write stuff on DevTo and Medium" />
        <meta property="og:image" content="https://i.ibb.co/0yRWw6g/blog-page-og-image.png" />
        <meta property="og:url" content="https://shrihari-portfolio.vercel.app/blogs" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shrihari-portfolio.vercel.app/blogs" />
        <meta property="twitter:title" content="Shrihari Blogs" />
        <meta property="twitter:description" content="I write stuff on DevTo and Medium" />
        <meta property="twitter:image" content="https://i.ibb.co/0yRWw6g/blog-page-og-image.png" />
      </Head>
      <NavBar showBlogsItems={false} onSeeAbout={onScrollToABout} />
      <BlogLanding onViewBlogs={onScrollToBlogs} />
      <Grid container ref={blogsRef} className='sm:justify-center' pb={8}>
        {
          data.map((blog: any) => {
            return (
              <Grid item sx={{ marginRight: { xs: 0 } }}>
                <BlogCard obj={blog} key={blog.id} />
              </Grid>
            )
          })
        }
      </Grid>
      <Footer ref={aboutRef} />
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API

  const res = await fetch('https://dev.to/api/articles/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.DEV_ID!
    },
  }
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Blogs
