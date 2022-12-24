import { Box, Grid } from "@mui/material";
import Medion from "../Project_Details/medion";
import Forum from "../Project_Details/forum";

function MedionAndForumContainer() {
  return (
    <Grid container
      gap={4}
      className="flex justify-center items-center my-24 px-6 sm:px-0">
      <Grid item xs={12} sm={8} lg={5}>
      <Medion />
      </Grid>
      <Grid item xs={12} sm={8} lg={5}>
      <Forum />
      </Grid>

    </Grid>
  );
}

export default MedionAndForumContainer;
