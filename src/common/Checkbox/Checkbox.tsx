import { CheckboxProps } from '../types'

import './checkbox.scss'


export const Checkbox = ({  label, checked, onChange, className }: CheckboxProps) => {
    const inputId = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <label className={`checkbox ${className ? className : ''}`} htmlFor={inputId}>
            <input
                id={inputId}
                type="checkbox"
                className="checkbox__input"
                checked={checked}
                onChange={onChange}
            />
            <div className={`checkbox__box ${checked ? 'checkbox__box--checked' : ''}`}/>
            <span className="checkbox__label">{label}</span>
        </label>
    )
}