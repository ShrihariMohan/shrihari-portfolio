import { Grid } from "@mui/material";
import React from "react";
import { links, moreLinks } from "../../constants/contactLinks";
export function SecondCol({ }) {
  return <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>


    <p className="text-slate-400 mb-2"> For Detailed contributions visit <a href={links.notion} target="_blank">
      <span className="font-bold text-slate-300">
      Notion
    </span>
    </a>
    </p>

    <p className="text-slate-400 mb-2">Contact me by <a href={moreLinks.form} target='_blank'>
      <span className="font-bold text-slate-300">
      Form
    </span>
    </a>
      <small> *coughs* Neanderthals </small> 
    </p>

    <p className="text-slate-400 mb-2"> Need a professional resume ? <a href="/ShrihariResume.pdf" target='_blank'>
      <span className="font-bold text-slate-300">
        Download
      </span>
    </a></p>

    {/* <p className="text-slate-400 mb-2"> View profile on <a href="https://angel.co/u/shrihari-uma" target='_blank'>
      <span className="font-bold text-slate-300">
        Angel List
      </span>
    </a> </p> */}

  </Grid >;
}
