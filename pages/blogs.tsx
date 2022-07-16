import { Grid } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import BlogCard from "../components/UI components/blogCard";
import Footer from "../components/Footer/footer";
import NavBar from "../components/Navbar/navBar";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IDev } from '../types/devToTypes';
import { useRouter } from "next/router";
import AddToMailList from "../components/Container/addToMailList";

interface props {
  data: IDev[] | []
}

const sortOptsArray = ['Latest', 'Most Viewed', 'Most Liked', 'Oldest'];
enum sortOptions {
  Latest = 'Latest',
  MostViewed = 'Most Viewed',
  MostLiked = 'Most Liked',
  Oldest = 'Oldest'
}

const Blogs: NextPage<props> = ({ data }: props) => {
  const router = useRouter();
  const query = router.query;
  const slug = query.slug as Array<string>;

  const blogsRef: any = useRef<HTMLElement>(null)
  const aboutRef: any = useRef<HTMLElement>(null)

  const [sort, setSort] = useState<sortOptions>(sortOptions.MostViewed);

  const onScrollToBlogs = () => {
    let block = 'start'
    if (window.screen.width > 768) block = 'center'
    blogsRef?.current.scrollIntoView({ behavior: 'smooth', block })
  }


  const onScrollToABout = () => {
    let block = 'start'
    if (window.screen.width > 768) block = 'center'
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block })
  }


  const handleFilter = (event: SelectChangeEvent) => {
    const sortOption = event.target.value as sortOptions;
    setSort(sortOption);

    switch (sortOption) {
      case sortOptions.Latest:
        data.sort((a, b) => {
          return new Date(b.published_timestamp).getTime() - new Date(a.published_timestamp).getTime();
        })
        break;

      case sortOptions.MostViewed:
        data.sort((a, b) => {
          return b.page_views_count - a.page_views_count;
        })
        break;

      case sortOptions.MostLiked:
        data.sort((a, b) => {
          return b.public_reactions_count - a.public_reactions_count;
        })
        break

      case sortOptions.Oldest:
        data.sort((a, b) => {
          return new Date(a.published_timestamp).getTime() - new Date(b.published_timestamp).getTime();
        })
        break;

    }

    setSort(sortOption);
  };

  return (
    <>
      <Head>
        <title >Shrihari</title>

        <meta name="theme-color" content="#22d3ee" />
        <meta name="title" content="Shrihari Blogs" />
        <meta name="description" content="I write stuff on DevTo and Medium" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shrihari Blogs" />
        <meta property="og:description" content="I write stuff on DevTo and Medium" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/shrihari-personal-storage.appspot.com/o/blog-og-image.png?alt=media&token=07054d5b-f14a-4c94-a597-7d2560730f33" />
        <meta property="og:url" content="https://shrihari-portfolio.vercel.app/blogs" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shrihari-portfolio.vercel.app/blogs" />
        <meta property="twitter:title" content="Shrihari Blogs" />
        <meta property="twitter:description" content="I write stuff on DevTo and Medium" />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/shrihari-personal-storage.appspot.com/o/blog-og-image.png?alt=media&token=07054d5b-f14a-4c94-a597-7d2560730f33" />

        <link rel='icon' href="https://img.icons8.com/color/48/000000/morty-smith.png" type='image/x-icon'></link>

      </Head>
      <NavBar showBlogsItems={false} onSeeAbout={onScrollToABout} />
      {/* <BlogLanding onViewBlogs={onScrollToBlogs} /> */}
      <section >
        <AddToMailList />
      </section>
      <div className="flex justify-center mt-12">

        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 250 }} fullWidth >
          <InputLabel id="demo-select-small">Sort By</InputLabel>
          <Select
            labelId="sort-blogs"
            id="sort-blogs"
            value={sort}
            label="Sort By"
            onChange={handleFilter}
            className="rounded-lg drop-shadow-lg  active:border-cyan-400"
          >
            {
              sortOptsArray.map((sortOption, index) => {
                return <MenuItem key={index} value={sortOption}>{sortOption}</MenuItem>
              })
            }
          </Select>
        </FormControl>
      </div>
      <Grid container ref={blogsRef} className='sm:justify-center' pb={8}>
        {
          data.slice(0, 4).map((blog: any, index) => {
            return (
              <Grid item key={index} sx={{ marginRight: { xs: 0 } }}>
                <BlogCard obj={blog} key={index} />
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
  let data: IDev[] = await res.json()
  data = data.sort((a, b) => a.page_views_count - b.page_views_count > 0 ? -1 : 1)

  // Pass data to the page via props
  return { props: { data } }
}

export default Blogs
