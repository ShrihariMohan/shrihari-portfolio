import { Grid } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import BlogCard from "../../components/blogCard";
import BlogLanding from "../../components/blogLanding";
import BlogsContainer from "../../components/blogsContainer";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IDev } from '../../types/devToTypes';
import { useRouter } from "next/router";

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

  const [sort, setSort] = useState(sortOptsArray[0]);

  const onScrollToBlogs = () => {
    let block = 'start'
    if (window.screen.width > 768) block = 'center'
    blogsRef?.current.scrollIntoView({ behavior: 'smooth', block })
  }

  // if (slug.length) {
  //   // window.scroll(0, 100)
  // }

  const onScrollToABout = () => {
    let block = 'start'
    if (window.screen.width > 768) block = 'center'
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block })
  }


  const handleFilter = (event: SelectChangeEvent) => {
    const sortOption = event.target.value;
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
        <meta property="og:image" content="https://i.ibb.co/0yRWw6g/blog-page-og-image.png" />
        <meta property="og:url" content="https://shrihari-portfolio.vercel.app/blogs" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shrihari-portfolio.vercel.app/blogs" />
        <meta property="twitter:title" content="Shrihari Blogs" />
        <meta property="twitter:description" content="I write stuff on DevTo and Medium" />
        <meta property="twitter:image" content="https://i.ibb.co/0yRWw6g/blog-page-og-image.png" />

        <link rel='icon' href="https://img.icons8.com/color/48/000000/morty-smith.png" type='image/x-icon'></link>

      </Head>
      <NavBar showBlogsItems={false} onSeeAbout={onScrollToABout} />
      <BlogLanding onViewBlogs={onScrollToBlogs} />
      <div className="flex justify-center ">

        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 250 }} fullWidth >
        <InputLabel id="demo-select-small">Sort By</InputLabel>
        <Select
          labelId="sort-blogs"
          id="sort-blogs"
          value={sort}
          label="Sort By"
          onChange={handleFilter}
          className="rounded-lg"
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
