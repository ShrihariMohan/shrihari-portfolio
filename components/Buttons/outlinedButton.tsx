type OutlinedButtonProps = {
  text: string,
  onClick: any,
  icon?: any
}

function OutlinedButton({ text, onClick, icon }: OutlinedButtonProps) {
  return (
    <button onClick={onClick}
      className="border border-cyan-300 p-3 mt-6 text-cyan-300 rounded-lg hover:bg-cyan-900 cursor-pointer">
      {icon ? icon : ''}  {text}
    </button>
  )
}

export default OutlinedButton