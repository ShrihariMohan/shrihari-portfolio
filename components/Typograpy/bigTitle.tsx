function BigTitle({ text, classes = '' }: { text: string, classes?: String }) {

  return (
    <p className={"text-4xl m-3 font-bold tracking-widest leading-snug " + classes}> {text}</p>
  )
}

export default BigTitle