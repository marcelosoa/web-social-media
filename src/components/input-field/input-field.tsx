import { ComponentPropsWithRef } from "react"
import { IconContext } from "react-icons"

type InputFieldProps = ComponentPropsWithRef<'input'> &{
  placeholder: string,
  error: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const InputField = ({ placeholder, error, startIcon, onChange, type, endIcon }: InputFieldProps) => {

  const hasError = !!error
  return (
    <IconContext.Provider value={{ className: 'h-6 w-6 text-secondary' }}>
    <div className="mt-10 bg-white border rounded-lg text-xs p-4 w-80 shadow-lg flex gap-2 items-center">

      {startIcon}

      <input className="w-full select-none border-none bg-transparent outline-none" 
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        />

      {endIcon}

      {hasError && <span className="mt-2 text-red-700">{error}</span>}
    </div>
    </IconContext.Provider>
  )
}