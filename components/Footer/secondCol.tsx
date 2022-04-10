import { Grid } from "@mui/material";
import React from "react";
import { links, moreLinks } from "../../constants/contactLinks";
export function SecondCol({ }) {
  return <Grid item xs={12} sm={6} md={3}>


    <p className="text-slate-400 mb-2"> For Detailed contributions visit <a href={links.notion} target="_blank"> <span className="text-gray-200 font-bold">
      Notion
    </span>
    </a>
    </p>

    <p className="text-slate-400 mb-2">Contact me by <a href={moreLinks.form} target='_blank'><span className="text-yellow-400 font-bold">
      Form
    </span>
    </a>
      <small> *coughs* Neanderthals </small> 
    </p>

    <p className="text-slate-400 mb-2"> Need a professional resume ?<a href="/ShrihariResume.pdf" target='_blank'>  <span className="text-emerald-400 font-bold"> Download </span>
    </a></p>

    <p className="text-slate-400 mb-2"> View profile on <a href="https://angel.co/u/shrihari-uma" target='_blank'>  <span className="text-lime-400 font-bold"> Angel List </span>
    </a> </p>

  </Grid >;
}
