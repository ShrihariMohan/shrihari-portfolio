import { motion } from "framer-motion"

const Variants = {
  orange: ' bg-orange-400 hover:bg-orange-500',
  green: ' bg-teal-400 hover:bg-teal-500',
  default: ' bg-cyan-400 hover:bg-cyan-500',
}

type PrimaryButtonProps = {
  text: string,
  onClick: any,
  disabled?: boolean,
  icon?: any,
  fullWidth?: boolean,
  variant?: keyof typeof Variants

}

function PrimaryButton({ text, onClick, icon, fullWidth, variant = 'default', disabled = false }: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={"p-3  text-black rounded-lg  cursor-pointer drop-shadow-lg disabled:cursor-not-allowed " + Variants[variant] + (fullWidth ? " w-full " : "")}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? icon : ''}  {text}
    </motion.button>
  )
}

export default PrimaryButton