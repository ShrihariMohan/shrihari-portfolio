import { motion } from "framer-motion"

type PrimaryButtonProps = {
  text: string,
  onClick: any,
  icon?: any
}

function PrimaryButton({ text, onClick, icon }: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-cyan-300 p-3  text-black rounded-lg hover:bg-cyan-500 cursor-pointer"
      onClick={onClick}
    >
      {icon ? icon : ''}  {text}
    </motion.button>
  )
}

export default PrimaryButton