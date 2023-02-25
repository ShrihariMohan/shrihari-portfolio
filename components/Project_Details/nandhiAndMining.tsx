import { Box, Grid } from "@mui/material"
import Chips from "../UI components/chips"
import { VideoDemoLinks } from "../../constants/videoDemoLinks";
import { links } from "../../constants/contactLinks"
import AboveTitle from "../Typograpy/aboveTitle";
import { motion } from "framer-motion"

const stack = ['Nextjs', 'FireStore', 'Firebase Storage', 'Functions', 'Netlify', 'Github & Projects']

function NandhiAndMining() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{ minHeight: '60vh' }}
    >
      <Grid
        container
        gap={4}
        className="flex justify-center items-center my-24 p-6 sm:px-0"
      >
        <Grid
          item
          xs={11}
          md={8}
          lg={10}
          sx={{ textAlign: { xs: "center", sm: "unset" } }}
          className="rounded-md"
        >
          <AboveTitle text="Freelance" />
          <p className="text-3xl mb-4 font-bold tracking-wider">
            {" "}
            Nandhi Mining & Company{" "}
          </p>
          <p className="text-slate-200 font-light mb-6">
            It is one of the players in CNC Milling Machine, Hydraulic Milling
            Machine to name a few.
            This is a website that helps the company to store all their
            Finances, Bills, Employees Details and their Payments. This is a
            private organization so github repo is private.
            <a
              className="text-sm text-cyan-400 hover:cursor-pointer"
              href={links.notion}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              For more information visit Notion{" "}
            </a>{" "}
          </p>
          <video
            src={VideoDemoLinks.nandhi}
            controls
            className="rounded-md block mx-auto  shadow-lg w-full hover:shadow-cyan-600/40"
          ></video>

          <Box className="mt-2 mx-2 text-center">
            {stack.map((each, ind) => {
              return <Chips text={each} key={ind} />;
            })}
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default NandhiAndMining