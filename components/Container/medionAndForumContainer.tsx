import { Box, Grid } from "@mui/material";
import Medion from "../Project_Details/medion";
import Forum from "../Project_Details/forum";

function MedionAndForumContainer() {
  return (
    <Box className="flex justify-center gap-14 flex-wrap  mt-24 mb-4 px-8 ">
      <Medion />
      <Forum />
    </Box>
  );
}

export default MedionAndForumContainer;
