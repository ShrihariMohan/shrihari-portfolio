import { Grid } from "@mui/material"
import Medion from "../Project_Details/medion";
import Forum from "../Project_Details/forum";


function MedionAndForumContainer() {
  return (
    <Grid container className="flex justify-center mb-4 px-4 sm:px-0" >
      <Grid item xs={0} sm={1} />
      <Grid item xs={12} sm={5} className="mb-24">
        <Medion />
      </Grid>


      <Grid item xs={12} sm={5} className="mb-24">
        <Forum />
      </Grid>

    </Grid>
  )
}

export default MedionAndForumContainer