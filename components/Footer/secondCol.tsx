import { Grid } from "@mui/material";
import React from "react";
import { links, moreLinks } from "../../constants/contactLinks";
export function SecondCol({ }) {
  return <Grid item xs={12} sm={6} md={5} mb={4}>


    <p className="text-slate-400 mb-2"> To know more about the contributions & projects visit <a href={links.notion} target="_blank"> <span className="text-gray-200 font-bold">
      Notion
    </span>
    </a>
    </p>

    <p className="text-slate-400 mb-2"> Don't want to give away your social id ? Use this <a href={moreLinks.form} target='_blank'><span className="text-yellow-400 font-bold">
      Google Form
    </span>
    </a>
    </p>

    <p className="text-slate-400 mb-2"> Need a professional resume ?<a href="/ShrihariResume.pdf" target='_blank'>  <span className="text-emerald-400 font-bold"> Download </span>
    </a></p>





  </Grid >;
}
