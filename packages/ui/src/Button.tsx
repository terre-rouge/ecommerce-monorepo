import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * A label to show on the button
   */
  label: string
}

function Button({ label = 'Hello' }: ButtonProps) {
  return <button type="button">{label}</button>
}
export default Button
