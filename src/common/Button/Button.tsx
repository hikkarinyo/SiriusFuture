import { ButtonProps } from '../types'

import './button.scss'

export const Button = ({ children, onClick, disabled, className }: ButtonProps) => (
    <button className={`button ${className ? className : ''}`} onClick={onClick} type='submit' disabled={disabled}>
        {children}
    </button>
)