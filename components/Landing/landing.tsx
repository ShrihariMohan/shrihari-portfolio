import Image from "next/image"

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box, Grid } from "@mui/material";
import AboveTitle from "../Typograpy/aboveTitle";
import PrimaryButton from "../Buttons/primaryButton";
import { motion } from "framer-motion"
import OutlinedButton from "../Buttons/outlinedButton";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { useRouter } from 'next/router';
import { links } from "../../constants/contactLinks";
import { addSubscriber } from "../../services/subscriberService";


function Landing({ onSeeProjects }: { onSeeProjects: Function }) {
  const router = useRouter();

  const onClick = () => {
    addSubscriber('shriharipapa@gmail.com')
  }
  return (
    <motion.div
    >
      <Grid container className="px-4 sm:px-0 flex justify-center items-center" sx={{ height: 'calc(100vh - 64px)' }}>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8} md={4} >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }} >

            <AboveTitle text="Web developer" />
            <h1 className="text-3xl font-semibold mt-2 tracking-wide mb-2">
              I Stack your Problems and pop 🎉 until its Empty
            </h1>

            <section className="flex justify-center sm:justify-start mb-4">
              <p className="mr-3 text-slate-400">Follow <a href={links.devto} target='_blank' className="text-cyan-500">@Devto</a></p>
              <p className="text-slate-400">Follow <a href={links.medium} target='_blank' className="text-cyan-500">@Medium </a></p>

            </section>

            <div className="flex gap-4 justify-center sm:justify-start">
              <PrimaryButton text="See Contributions" icon={<RemoveRedEyeOutlinedIcon className="align-top" />} onClick={onSeeProjects} />
              <OutlinedButton text="View Blogs" icon={<BookOutlinedIcon className="align-top" />} onClick={() => { router.push('/blogs') }} />
            </div>

          </Box>

        </Grid>
        <Grid item xs={0} sm={4} sx={{ display: { xs: 'none ', md: 'block' } }} justifySelf='center' className="text-right">
          <picture>
            <Image className="hidden" src='/landing.svg' height={400} width={400} alt='illustration space ship abducting' />
            <p className="text-slate-500 text-xs text-center"> Art from <a className="text-slate-400 underline" href="https://undraw.co/" target='_blank' rel="noreferrer"> undraw</a></p>
          </picture>
        </Grid>
        <Grid item xs={0} sm={2} />

      </Grid>
    </motion.div >
  )
}

export default Landing