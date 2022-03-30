type PrimaryButtonProps = {
  text: string,
  onClick: any,
  icon?: any
}

function PrimaryButton({ text, onClick, icon }: PrimaryButtonProps) {
  return (
    <button onClick={onClick}
      className="bg-cyan-300 p-3 mt-6 text-black rounded-lg hover:bg-cyan-500 cursor-pointer">
      {icon ? icon : ''}  {text}
    </button>
  )
}

export default PrimaryButton