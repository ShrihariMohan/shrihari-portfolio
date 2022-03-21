import { Grid } from "@mui/material"
import Medion from "./medion";
import Forum from "./forum";


function MedionAndForumContainer() {
  return (
    <Grid container className="flex justify-around items-center mb-4 px-4 sm:px-0" sx={{ height: { sm: 'calc(100vh - 64px)' } }}>
      <Grid item xs={0} sm={1} />
      <Grid item xs={12} sm={5} sx={{ textAlign: { xs: 'center', md: 'left' } }} className="mb-16">
        <Medion />
      </Grid>


      <Grid item xs={12} sm={5} sx={{ textAlign: { xs: 'center', md: 'left' } }} className="mb-16">
        <Forum />
      </Grid>

      <Grid item xs={0} sm={1} />
    </Grid>
  )
}

export default MedionAndForumContainer