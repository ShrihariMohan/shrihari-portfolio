import { motion } from "framer-motion"
import { FunctionComponent } from "react"
const Variants = {
  orange: 'text-orange-300 border-orange-400 hover:bg-orange-900',
  green: 'text-teal-400 border-teal-400 hover:bg-teal-900',
  default: 'text-cyan-300 border-cyan-300 hover:bg-cyan-900',
}

type OutlinedButtonProps = {
  text: string,
  onClick: any,
  icon?: any,
  fullWidth?: boolean,
  variant?: keyof typeof Variants
}

const OutlinedButton: FunctionComponent<OutlinedButtonProps> = ({ text, onClick, icon, fullWidth, variant = 'default' }) => {
  console.log(variant)
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={" border-2 rounded-lg p-3 cursor-pointer drop-shadow-lg " + Variants[variant] + (fullWidth ? " w-full " : "")}
      onClick={onClick}
    >
      {icon ? icon : ''}  {text}
    </motion.button>
  )
}

export default OutlinedButton