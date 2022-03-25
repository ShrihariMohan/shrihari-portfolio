import React from "react"
import MedionAndForumContainer from "./projects/medionAndForumContainer"
import NandhiAndMining from "./projects/nandhiAndMining"

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div style={{ paddingTop: 32 }} ref={ref}>
      <NandhiAndMining />
      <MedionAndForumContainer />
    </div>
  )

})

export default Projects