

function Chips({ text }: { text: string }) {
  return (
    <>
      <span className=" text-sm text-slate-400 capitalize">
        {' ' + text + ' '}·
      </span>
    </>
  )
}

export default Chips