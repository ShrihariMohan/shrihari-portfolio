function AboveTitle({ text, color = 'text-slate-500' }: { text: string, color?: string }) {

  return (
    <span className={color + " font-light border-t-4 border-orange-600 pt-1 pb-1 mb-1 tracking-wider italic rounded-lg"}> {text}</span>
  )
}

export default AboveTitle