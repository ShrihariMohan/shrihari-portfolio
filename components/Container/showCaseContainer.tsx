import { Grid, Stack } from "@mui/material"
import { Box } from "@mui/system";
import { motion } from "framer-motion"
import PrimaryButton from "../Buttons/primaryButton";
import AboveTitle from "../Typograpy/aboveTitle"
import Chips from "../UI components/chips";
import { Extension } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { githubLinks, moreLinks } from "../../constants/contactLinks"

const stack = ['Javascript', 'Service Worker', 'Chrome Developer Tools']

type showCaseContainer = { videoLink: string, title: string, aboveTitle: string }
function ShowCaseContainer({ videoLink, title, aboveTitle }: showCaseContainer) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Grid
        container
        gap={4}
        className="flex justify-center items-center my-24 p-6 sm:px-0"
      >
        <Grid
          item
          xs={11}
          md={9}

          sx={{ textAlign: { xs: "center", sm: "unset" } }}
          className="rounded-md"
        >
          <AboveTitle text={aboveTitle} />
          <p className="text-3xl mb-4 font-bold tracking-wider">
            {title}
          </p>
          <p className="text-slate-200 font-light mb-6">
            Do you spend countless hours troubleshooting frustrating front-end issues like misaligned margins, incorrect paddings, or unexpected scroll behavior? Say goodbye to those pesky ghost CSS elements that haunt your app with just one click.</p>

          <video

            src={videoLink}
            autoPlay
            muted
            className="rounded-md block mx-auto  shadow-lg w-full hover:shadow-cyan-600/40"
          ></video>

          <Box className="mt-2 mx-2 text-center">
            {stack.map((each, ind) => {
              return <Chips text={each} key={ind} />;
            })}
          </Box>

          <Box className="flex gap-5 justify-center my-6">
            <PrimaryButton
              text="Visit Extension"
              icon={<Extension className="align-top" />}
              onClick={() => window.open(moreLinks.ghostCssExtension)}
            />
            <PrimaryButton
              text="View Github"
              icon={<GitHubIcon className="ml-1 text-[22px]" />}
              onClick={() => window.open(githubLinks.ghostcss)}
            />
          </Box>

        </Grid>
      </Grid>
    </motion.div>
  );
}

export default ShowCaseContainer