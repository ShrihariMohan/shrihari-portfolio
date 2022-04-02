import { motion } from "framer-motion"

type OutlinedButtonProps = {
  text: string,
  onClick: any,
  icon?: any
}

function OutlinedButton({ text, onClick, icon }: OutlinedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="border border-cyan-300 p-3 text-cyan-300 rounded-lg hover:bg-cyan-900 cursor-pointer"
      onClick={onClick}
    >
      {icon ? icon : ''}  {text}
    </motion.button>
  )
}

export default OutlinedButton