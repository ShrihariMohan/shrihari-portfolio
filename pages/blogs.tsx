import { NextPage } from "next";
import { useRef } from "react";
import BlogCard from "../components/blogCard";
import BlogLanding from "../components/blogLanding";
import BlogsContainer from "../components/blogsContainer";
import NavBar from "../components/navBar";

const Blogs: NextPage = ({ data }: any) => {
  const blogsRefRef: any = useRef<HTMLElement>(null)

  const onScrollToBlogs = () => {
    let block = 'start'
    if (window.screen.width > 768) block = 'center'
    blogsRefRef.current.scrollIntoView({ behavior: 'smooth', block })
  }

  return (
    <>
      <NavBar showNavItems={false} />
      <BlogLanding onViewBlogs={onScrollToBlogs} />
      <section ref={blogsRefRef} className='flex justify-center gap-4'>

        {
          data.map((blog: any) => {
            return (
              <BlogCard obj={blog} key={blog.id} />
            )
          })
        }
      </section>
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
