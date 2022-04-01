import { Box, Grid } from "@mui/material"
import Chips from "./chips"
import { VideoDemoLinks } from "../constants/videoDemoLinks";
import { links } from "../constants/contactLinks"
import AboveTitle from "./Typograpy/aboveTitle";
import { motion } from "framer-motion"

const stack = ['Nextjs', 'FireStore', 'Firebase Storage', 'Functions', 'Netlify', 'Github & Projects']

function NandhiAndMining() {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >

    <Grid container className="flex justify-between items-center mb-16 px-4 sm:px-0" sx={{ height: { sm: 'calc(100vh - 64px)' } }}>
      <Grid item xs={0} sm={1} md={1} />
      <Grid item xs={12} sm={5} md={5} className="mb-8">
        <AboveTitle text="Freelance" />
        <p className="text-3xl mb-4 font-bold tracking-wider"> Nandhi Mining & Company </p>
        <p className="text-slate-200 font-light mb-6"> It is one of the players in CNC Milling Machine, Hydraulic Milling Machine to name a few. </p>
        <p className=" tracking-wider mb-2"> About Website </p>
        <p className="text-slate-200 font-light"> This is a website that helps the company to store all their Finances, Bills, Employees Details and their Payments. This is a private organization so github repo is private.
          <a className="text-sm text-cyan-400 hover:cursor-pointer" href={links.notion} target='_blank' rel="noreferrer"> For more information visit Notion </a> </p>

      </Grid>

      <Grid item xs={12} sm={5} md={5} sx={{ textAlign: { xs: 'center', sm: 'unset' } }}>
        <video src={VideoDemoLinks.nandhi}
          width={500} controls className="rounded-md block mx-auto" >
        </video>

        <Box className="mt-2 mx-2 text-center">
          {
            stack.map((each, ind) => {
              return (
                <Chips text={each} key={ind} />
              )
            })
          }
        </Box>
      </Grid>
      <Grid item xs={0} sm={1} md={1} />
    </Grid>
    </motion.div>

  )
}

export default NandhiAndMining