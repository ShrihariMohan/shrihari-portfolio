import { Box, Grid } from "@mui/material"
import Chips from "../chips"
import GitHubIcon from '@mui/icons-material/GitHub';
import { githubLinks, links } from "../../constants/contactLinks"
import { VideoDemoLinks } from "../../constants/videoDemoLinks";
const stack = ['React', 'DraftJS', 'Material UI', 'MongoDB', 'NodeJS', 'Express']

function Medion() {
  return (
    <Box sx={{ mr: { xs: 0, sm: 2 }, textAlign: { xs: 'center', sm: 'unset' } }}>
      <p className="text-3xl font-bold tracking-wider mb-3"> Medion  </p>
      <video src={VideoDemoLinks.medion}
        width={500} height={500} controls className="text-center mx-auto block  sm:mx-0 sm:text-left rounded-md mb-1 ">
      </video>
      <Box className="mb-4">
        {
          stack.map((each, ind) => {
            return (
              <Chips text={each} key={ind} />
            )
          })
        }
      </Box>
      <p className="text-slate-200 font-light mb-6">
        This is an simple text-editor app. Draft Js is Developed and Maintaned By Facebook Open source.
        Draft Js is used to create a Rich Text Editor.
      </p>
      <button className="text-black text-base bg-cyan-300 p-3 rounded-md hover:bg-cyan-500">
        <a href={githubLinks.medion} target='_blank'>
          View Github <GitHubIcon className="ml-1 text-[22px]" />
        </a>
      </button>
    </Box>
  )
}

export default Medion