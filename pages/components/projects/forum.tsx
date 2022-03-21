import { Box } from "@mui/material"
import { githubLinks } from "../../constants/contactLinks"
import { VideoDemoLinks } from "../../constants/videoDemoLinks"
import GitHubIcon from '@mui/icons-material/GitHub';
import Chips from "../chips"

const stack = ['Angular Framework', 'Material', 'MongoDB', 'NodeJS', 'Express']

function Forum() {
  return (
    <>
      <p className="text-3xl font-bold tracking-wider mb-3">Forum</p>
      <video src={VideoDemoLinks.forum}
        width={500} height={500} controls className="block text-center mx-auto sm:text-left sm:mx-0 rounded-md mb-1">
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
        The Social Media App with Google Auth , Follow People , Create Posts and Let your followers know what you're upto!
      </p>
      <button className="text-black text-base bg-cyan-300 p-3 rounded-md hover:bg-cyan-500">
        <a href={githubLinks.forum} target='_blank'>
          View Github <GitHubIcon className="ml-1 text-[22px]" />
        </a>
      </button>
    </>
  )
}

export default Forum