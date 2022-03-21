import Image from "next/image"

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box, Grid } from "@mui/material";
function Landing() {

  return (
    <Grid container spacing={2} className="px-4 sm:px-0 flex justify-between items-center" sx={{ height: 'calc(100vh - 64px)' }}>
      <Grid xs={0} sm={2} />
      <Grid item xs={12} sm={4}>
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <h1 className="text-5xl font-semibold text-primary mb-2 tracking-wide"> Wabba Lubba Dub Dubb</h1>
          <p className="text-slate-300 font-light" >I am in great pain please help me!
            thats what the above word means</p>
          <button className="bg-cyan-300 p-4 mt-6 text-black rounded-md hover:bg-cyan-500 cursor-pointer"> <RemoveRedEyeOutlinedIcon /> See Projects </button>
        </Box>
      </Grid>
      <Grid item xs={0} sm={4} sx={{ display: { xs: 'none ', sm: 'block' } }} justifySelf='center' className="text-right">
        <picture>
          <Image className="hidden" src='/landing_illustration.svg' height={350} width={350} alt='illustration space ship abducting' />
          <p className="text-slate-500 text-xs text-center"> Art from <a className="text-slate-400 underline" href="https://undraw.co/" target='_blank' rel="noreferrer"> undraw</a></p>
        </picture>
      </Grid>
      <Grid xs={0} sm={2} />

    </Grid>
  )
}

export default Landing