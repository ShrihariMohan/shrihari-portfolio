import { Box, Button, Grid, Tooltip } from "@mui/material"
import Chips from "../chips"
import GitHubIcon from '@mui/icons-material/GitHub';
import { VideoDemoLinks } from "../../constants/videoDemoLinks";
import { links } from "../../constants/contactLinks"

const stack = ['Nextjs', 'FireStore', 'Firebase Storage', 'Functions', 'Netlify', 'Github & Projects']

function NandhiAndMining() {
  return (
    <Grid container spacing={3} className="flex justify-between items-center mb-16 px-4 sm:px-0" sx={{ height: { sm: 'calc(100vh - 64px)' } }}>
      <Grid item xs={0} sm={2} md={1} />
      <Grid item xs={12} sm={4} md={5} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
        <p className="text-3xl mb-4 font-bold tracking-wider"> Nandhi Mining & Company </p>
        <p className="text-slate-200 font-light mb-6"> It is one of the players in CNC Milling Machine, Hydraulic Milling Machine to name a few. </p>
        <p className=" tracking-wider mb-2"> About Website </p>
        <p className="text-slate-200 font-light"> This is a website that helps the company to store all their Finances, Bills, Employees Details and their Payments.
          <a className="text-sm text-slate-400 hover:cursor-pointer" href={links.notion} target='_blank' rel="noreferrer"> For more information visit Notion </a> </p>
        <Tooltip title='Private Repository' disableFocusListener disableInteractive enterTouchDelay={0} placement='top'>
          <Button className="text-black text-base bg-slate-400 p-3 mt-6  rounded-md hover:cursor-not-allowed hover:bg-slate-400 transform-none capitalize" > View Github <GitHubIcon className="ml-1 text-[22px]" /></Button>
        </Tooltip>
      </Grid>

      <Grid item xs={12} sm={4} md={5} sx={{ textAlign: { xs: 'center', sm: 'unset' } }}>
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
      <Grid item xs={0} sm={2} md={1} />

    </Grid>
  )
}

export default NandhiAndMining