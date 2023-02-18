import { motion } from "framer-motion"

type showCaseContainer = { videoLink: string, title: string, description: string }
function ShowCaseContainer({ videoLink, title, description }: showCaseContainer) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
    </motion.div>
  )
}

export default ShowCaseContainer