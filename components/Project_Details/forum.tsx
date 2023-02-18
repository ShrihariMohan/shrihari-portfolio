import { Box } from "@mui/material"
import { githubLinks } from "../../constants/contactLinks"
import { VideoDemoLinks } from "../../constants/videoDemoLinks"
import GitHubIcon from '@mui/icons-material/GitHub';
import Chips from "../UI components/chips"
import AboveTitle from "../Typograpy/aboveTitle";
import PrimaryButton from "../Buttons/primaryButton";
import OutlinedButton from "../Buttons/outlinedButton";

const stack = ['Angular Framework', 'Material', 'MongoDB', 'NodeJS', 'Express']

function Forum() {

  const onClick = () => {
    window.open(githubLinks.forum)
  }

  return (
    <Box mb={3}>
      <AboveTitle text="Silly Project" />
      <p className="text-3xl font-bold tracking-wider mb-3">Forum</p>
      <p className="text-slate-200 font-light mb-6 w-full">
        The Social Media App with Google Auth 2.0 using passport js, Follow People , Create and edit Posts and Let your followers know what you're upto!
      </p>
      <video src={VideoDemoLinks.forum}
        controls className="block w-full mx-auto  sm:mx-0 rounded-md mb-1  shadow-lg  hover:shadow-cyan-600/40">
      </video>
      <Box className="mb-4 text-center">
        {
          stack.map((each, ind) => {
            return (
              <Chips text={each} key={ind} />
            )
          })
        }
      </Box>

      <Box className="text-center">

        <PrimaryButton text="View Github" icon={<GitHubIcon className="ml-1 text-[22px]" />} onClick={onClick} />
      </Box>

    </Box>
  )
}

export default Forum