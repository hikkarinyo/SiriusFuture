import { useState } from 'react'

import { InputProps } from '../types'

import { SvgIcon } from '@common/SvgIcon/SvgIcon.tsx'

import './input.scss'


export const Input = ({ value, label, name, register, onChange, type, error }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="input__container">
            <input
                className='input__field'
                {...register(name)}
                name={name}
                placeholder={label}
                value={value}
                onChange={onChange}
                type={showPassword ? 'text' : type}
            />
            {type === 'password' && (
                <span className="input__toggle-password" onClick={togglePasswordVisibility}>
                    {showPassword ? <SvgIcon src='eyeHidden.svg'/> : <SvgIcon src='eye.svg'/>}
                </span>
            )}
            <span className={`input__message ${error ? 'input__message-error' : ''}`}>
                {error}
            </span>
        </div>
    )
}