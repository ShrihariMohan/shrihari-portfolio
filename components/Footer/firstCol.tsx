import { Grid } from "@mui/material";
import React from "react";
import { links, moreLinks } from "../../constants/contactLinks";
export function FirstCol({ }) {
  return <Grid item xs={12} sm={6} md={5} mb={4}>


    <p className=" text-slate-400 mb-2"> Currently working in <a href={moreLinks.company} target='_blank'> <span className="text-cyan-400 font-bold">
      Varivas
    </span>
    </a>
    </p>

    <p className="text-slate-400 mb-2"> Recent write up on
      <a href={moreLinks.devto} target='_blank'>  &nbsp;
        <span className="text-violet-400 font-bold">
          Dev.to
        </span>
      </a>
    </p>



    <p className="text-slate-400 mb-2"> Favourite music
      <a href={moreLinks.music} target='_blank'>  &nbsp;
        <span className="text-pink-400 font-bold">
          Playlist
        </span>
      </a>
    </p>


    <p className="text-slate-400 mb-2"> Recently finished book
      <a href={moreLinks.book} target='_blank'> &nbsp;
        <span className="text-blue-400 font-bold">
          Refactoring UI
        </span>
      </a>
    </p>
  </Grid>;
}
