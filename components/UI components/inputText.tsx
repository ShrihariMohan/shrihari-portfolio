import { ChangeEvent, ChangeEventHandler } from "react"
type fn = (e: ChangeEvent<HTMLInputElement>) => void

type props = {
  placeholder: string,
  type: string,
  value: string,
  label?: string | null,
  border?: boolean,
  error?: string | null,
  onChange: fn,
}

function InputText({ placeholder, onChange, value, label, type, border = false, error = null }: props) {


  return (
    <div className="flex flex-col">
      {label && <label className="mb-4 text-xl tracking-wider text-slate-300"> {label} </label>}
      <input type={type} placeholder={placeholder} className="rounded-lg py-3 px-2 bg-transparent  text-slate-200 border-2 border-slate-400"
        value={value} onChange={onChange} />
      {error && <small className="text-red-500 text-sm mt-1"> {error} </small>}
    </div>
  )
}

export default InputText