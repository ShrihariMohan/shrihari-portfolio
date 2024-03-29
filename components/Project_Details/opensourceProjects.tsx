import Image from "next/image";
import { Box, Grid, Tooltip } from "@mui/material";
import Title from "../Typograpy/title";
import AboveTitle from "../Typograpy/aboveTitle";
import React from "react"
import { motion } from "framer-motion"

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PeopleIcon from '@mui/icons-material/People';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PrimaryButton from "../Buttons/primaryButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import OutlinedButton from "../Buttons/outlinedButton";
import LanguageIcon from '@mui/icons-material/Language';

const OpenSourceProjects = React.forwardRef<HTMLDivElement>((props, ref) => {

  const onViewGitOfPvz = () => {
    window.open('https://github.com/code-cracked/plants-vs-zombies-api')
  }

  const onViewGitOfSqueeth = () => {
    window.open('https://github.com/KMKoushik/squeeth-portal')

  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        ref={ref}
        gap={4}
        className="min-h-screen px-6 sm:px-0"
      >
        <Grid item xs={12} sm={10} md={5} mb={4} justifyContent={{ xs: "center", lg: "unset" }}>
          <AboveTitle text="Open Source, Freelance" />
          <Title text="Squeeth Portal" />
          <div className=" drop-shadow-md  hover:scale-105 hover:transition-transform">
            <a href="https://www.squeethportal.xyz/">
              <img
                src="/squeeth.jpeg"
                className="rounded-lg w-full h-80 object-cover"
              />
            </a>
          </div>
          <div className="mt-4 max-w-[450px]">
            <div className="flex justify-between">
              <div>
                <span className="mr-6">
                  <span className="text-slate-400"> Github </span>{" "}
                  <StarRoundedIcon className="text-yellow-600 align-top" />
                  <span className="font-bold"> 20 </span>
                </span>

                <span>
                  <span className="text-slate-400"> Contributors</span>{" "}
                  <PeopleIcon className="text-green-600 align-top" />
                  <span className="font-bold"> 8 </span>
                </span>
              </div>
            </div>
            <p className="mt-2 text-slate-300">
              An alternate app to interact with squeeth contracts and a single
              place for all your squeeths !
            </p>
          </div>
          <Box
            className="flex gap-4 mt-6"
            sx={{ justifyContent: { xs: "center", sm: "start" } }}
          >
            <PrimaryButton
              text="Visit Website"
              icon={<LanguageIcon className="align-top" />}
              onClick={() => window.open("https://www.squeethportal.xyz/")}
            />
            <OutlinedButton
              text="View Github"
              icon={<GitHubIcon className="align-top" />}
              onClick={onViewGitOfSqueeth}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={10} md={5} mb={4}>
          <AboveTitle text="Open Source" />
          <Title text="PvZ 2 Api" />

          <div className=" drop-shadow-md  hover:scale-105 hover:transition-transform ">
            <a href="https://pvz-2-api.vercel.app/">
              <img
                src="/pvz.jpeg"
                className="rounded-lg w-full h-80 object-cover"
              />
            </a>
          </div>
          <div className="mt-4 max-w-[450px]">
            <div className="flex justify-between">
              <div>
                <span className="mr-6">
                  <span className="text-slate-400"> Github </span>{" "}
                  <StarRoundedIcon className="text-yellow-600 align-top" />
                  <span className="font-bold"> 42 </span>
                </span>

                <span>
                  <span className="text-slate-400"> Contributors</span>{" "}
                  <PeopleIcon className="text-green-600 align-top" />
                  <span className="font-bold"> 5 </span>
                </span>
              </div>
            </div>
            <p className="mt-2 text-slate-300">
              An API built with with NextTS to help website builders build their
              websites about Plants-vs-Zombies-2
            </p>
          </div>
          <Box
            className="flex gap-4 mt-6"
            sx={{ justifyContent: { xs: "center", sm: "start" } }}
          >
            <PrimaryButton
              text="Visit Website"
              icon={<LanguageIcon className="align-top" />}
              onClick={() => window.open("https://pvz-2-api.vercel.app/")}
            />
            <OutlinedButton
              text="View Github"
              icon={<GitHubIcon className="align-top" />}
              onClick={onViewGitOfPvz}
            />
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
})

export default OpenSourceProjects