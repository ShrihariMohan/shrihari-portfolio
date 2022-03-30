import Image from "next/image";
import { Grid, Tooltip } from "@mui/material";
import Title from "./Typograpy/title";
import AboveTitle from "./Typograpy/aboveTitle";
import React from "react"

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PeopleIcon from '@mui/icons-material/People';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PrimaryButton from "./Buttons/primaryButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import OutlinedButton from "./Buttons/outlinedButton";
import LanguageIcon from '@mui/icons-material/Language';


const OpenSourceProjects = React.forwardRef<HTMLDivElement>((props, ref) => {

  const onViewGitOfPvz = () => {
    window.open('https://github.com/code-cracked/plants-vs-zombies-api')
  }

  const onViewGitOfSqueeth = () => {
    window.open('https://github.com/KMKoushik/squeeth-portal')

  }
  return (
    <Grid container justifyContent='center' alignItems='center' >

      <Grid item xs={12} sm={8} md={5} className="mb-24 px-4">
        <AboveTitle text='Open Source, Freelance' />
        <Title text="Squeeth Portal" />
        <div className=" drop-shadow-md  hover:scale-105 hover:transition-transform">
          <a href="https://www.squeethportal.xyz/">
            <Image src='/squeeth.jpeg' width={450} height={250} className="rounded-lg" />
          </a>
        </div>
        <div className="mt-3 max-w-[450px]" >
          <span className="mr-6">
            <span className="text-slate-400"> Github </span> <StarRoundedIcon className="text-yellow-600 align-top" />
            <span className="font-bold"> 10 </span>
          </span>

          <span>
            <span className="text-slate-400"> Contributors</span> <PeopleIcon className="text-green-600 align-top" />
            <span className="font-bold"> 2 </span>
          </span>

          <p className="mt-2 text-slate-300">
            An alternate app to interact with squeeth contracts and a single place for all your squeeths !
            <Tooltip title='Last Updated on 29 Mar 2022' className="ml-2" disableFocusListener enterTouchDelay={0}>
              <span>
                <InfoOutlinedIcon className="align-top text-slate-500" />
              </span>
            </Tooltip>
          </p>
        </div>
        <div className="flex justify-start gap-4">
          <OutlinedButton text="View Github" icon={<GitHubIcon className="align-top" />} onClick={onViewGitOfSqueeth} />
          <PrimaryButton text="Visit Website" icon={<LanguageIcon className="align-top" />} onClick={() => window.open('https://www.squeethportal.xyz/')} />
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} className="mb-24 px-4" ref={ref}>
        <AboveTitle text='Open Source' />
        <Title text="PvZ 2 Api" />
        <div className=" drop-shadow-md  hover:scale-105 hover:transition-transform ">
          <a href="https://pvz-2-api.vercel.app/">
            <Image src='/pvz.jpeg' width={450} height={250} objectFit="cover" className="rounded-lg" />
          </a>
        </div>
        <div className="mt-3 max-w-[450px]" >
          <span className="mr-6">
            <span className="text-slate-400"> Github </span> <StarRoundedIcon className="text-yellow-600 align-top" />
            <span className="font-bold"> 41 </span>
          </span>

          <span>
            <span className="text-slate-400"> Contributors</span> <PeopleIcon className="text-green-600 align-top" />
            <span className="font-bold"> 5 </span>
          </span>

          <p className="mt-2 text-slate-300">
            An API built with with NextTS to help website builders build their websites about Plants-vs-Zombies-2
            <Tooltip title='Last Updated on 29 Mar 2022' className="ml-2" disableFocusListener enterTouchDelay={0}>
              <span>
                <InfoOutlinedIcon className="align-top text-slate-500" />
              </span>
            </Tooltip>
          </p>
        </div>
        <div className="flex justify-start gap-4">
          <OutlinedButton text="View Github" icon={<GitHubIcon className="align-top" />} onClick={onViewGitOfPvz} />
          <PrimaryButton text="Visit Website" icon={<LanguageIcon className="align-top" />} onClick={() => window.open('https://pvz-2-api.vercel.app/')} />
        </div>

      </Grid>


    </Grid >
  )
})

export default OpenSourceProjects