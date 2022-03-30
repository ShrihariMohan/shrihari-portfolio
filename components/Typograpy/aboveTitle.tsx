function AboveTitle({ text, color = 'text-slate-500' }: { text: string, color?: string }) {

  return (
    <span className={color + " font-light border-t-4 border-cyan-600 pt-1 mb-1 tracking-wider italic"}> {text}</span>
  )
}

export default AboveTitle