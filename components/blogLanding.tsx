import Image from "next/image"

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box, Grid } from "@mui/material";
import AboveTitle from "./Typograpy/aboveTitle";
import PrimaryButton from "./Buttons/primaryButton";
import { motion } from "framer-motion"
import { links } from "../constants/contactLinks";

function BlogLanding({ onViewBlogs }: { onViewBlogs?: Function }) {

  return (
    <motion.div
    >
      <Grid container className="px-4 sm:px-0 flex justify-center items-center" sx={{ height: 'calc(100vh - 64px)' }}>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={4} >
          <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }} >
            <AboveTitle text="Content Writer" />
            <h1 className="text-3xl font-semibold mt-2 tracking-wide mb-4 ">
              I write stuff on DevTo and Medium
            </h1>
            <section className="flex justify-center sm:justify-start mb-4">
              <p className="mr-3 text-slate-300">Follow <a href={links.devto} target='_blank' className="text-cyan-500">@Devto</a></p>
              <p className="text-slate-300">Follow <a href={links.medium} target='_blank' className="text-cyan-500">@Medium </a></p>
            </section>
            <PrimaryButton text="View Blogs" icon={<RemoveRedEyeOutlinedIcon className="align-top" />} onClick={onViewBlogs} />
          </Box>
        </Grid>
        <Grid item xs={0} sm={4} sx={{ display: { xs: 'non', sm: 'block' } }} justifySelf='center' className="text-right">
          <picture>
            <Image className="hidden" src='/blog_illustration.svg' height={400} width={400} alt='illustration space ship abducting' />
            <p className="text-slate-500 text-xs text-center"> Art from <a className="text-slate-400 underline" href="https://undraw.co/" target='_blank' rel="noreferrer"> undraw</a></p>
          </picture>
        </Grid>
        <Grid item xs={0} sm={2} />

      </Grid>
    </motion.div >
  )
}

export default BlogLanding