import { Box, Grid } from "@mui/material"
import Chips from "../UI components/chips"
import GitHubIcon from '@mui/icons-material/GitHub';
import { githubLinks, links } from "../../constants/contactLinks"
import { VideoDemoLinks } from "../../constants/videoDemoLinks";
import AboveTitle from "../Typograpy/aboveTitle";
import PrimaryButton from "../Buttons/primaryButton";
const stack = ['React', 'DraftJS', 'Material UI', 'MongoDB', 'NodeJS', 'Express']

function Medion() {

  const onClick = () => {
    window.open(githubLinks.medion)
  }

  return (
    <Box sx={{ mr: { xs: 0, sm: 2 } }} mb={3}>
      <AboveTitle text="Project" />
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
      <p className="text-slate-200 font-light mb-6 max-w-[500px]">
        This is an simple text-editor app. Draft Js is Developed and Maintaned By Facebook Open source.
        Draft Js is used to create a Rich Text Editor.
      </p>

      <Box sx={{ textAlign: { xs: 'center', sm: 'unset' } }}>
        <PrimaryButton text="View Github" icon={<GitHubIcon className="ml-1 text-[22px]" />} onClick={onClick} />
      </Box>
    </Box>
  )
}

export default Medion