import { ComponentPropsWithRef } from "react"
import { VariantProps, tv } from "tailwind-variants"

type ButtonProps = ComponentPropsWithRef<'button'> & VariantProps<typeof buttonStyle> & {
  children: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const ButtonComponent = ({ children, ref, color, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonStyle({color})}
      ref={ref} 
      {...props}>
      {children}
    </button>
  )
}

const buttonStyle = tv({
  base: 'mt-10 w-full pr-3 shadow-lg h-12 bg-secondary text-white rounded-lg duration-300 ease-in-out active:bg-red-700 cursor-pointer flex items-center justify-center',
  variants: {
    color: {
      primary: '',
      secondary: 'border border-teal-600'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})