import React, { ChangeEvent } from 'react'

export interface SvgIconProps {
    src?: string
    width?: string
    height?: string
    className?: string
}

export interface InputProps {
    label: string
    value?: string
    name: string
    type: string
    onChange?: () => void
    error?: string
    register?: any
}

export interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export interface CheckboxProps {
    label: string
    checked: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    className?: string
}
