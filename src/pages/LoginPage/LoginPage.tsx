import React, {useEffect, useState} from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

import { Button } from '@common/Button/Button.tsx'
import { Checkbox } from '@common/Checkbox/Checkbox.tsx'
import { Container } from '@common/Container/Container.tsx'
import { Input } from '@common/Input/Input.tsx'
import { SvgIcon } from '@common/SvgIcon/SvgIcon.tsx'


import './loginPage.scss'
import { schemaAuthForm } from '@/helpers/validation.ts'
import { login } from '@/features/auth/authSlice.ts'
import {RootState} from "@/store/store.ts";


interface AuthData {
    email: string
    password: string
}

const LoginPage = () => {
    const {
        register, handleSubmit, formState: { errors }, reset,
    } = useForm<AuthData>({
        mode: 'onBlur',
        resolver: yupResolver(schemaAuthForm),
    })
    const [isChecked, setIsChecked] = useState(false)
    const [activeLanguage, setActiveLanguage] = useState('RU')
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const naviagate = useNavigate()

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }

    const handleLanguageChange = (language: string) => {
        setActiveLanguage(language)
    }

    const onSubmit: SubmitHandler<AuthData> = data => {
        dispatch(login({ email: data.email }))
        reset()
    }

    useEffect(() => {
        if (isAuthenticated) {
            naviagate('/schedule')
        }
    }, [isAuthenticated, naviagate])

    return (
        <Container className='loginPage__wrapper'>
            <div className='loginPage__form-wrapper'>
                <SvgIcon className='loginPage__logo' src='logo.svg' height='80' width='80'/>
                <form className='loginPage__form' onSubmit={handleSubmit(onSubmit)}>
                    <h5 className='loginPage__title'>Вход в Sirius Future</h5>
                    <Input
                        name='email'
                        type='email'
                        label='E-mail'
                        register={register}
                        error={errors.email?.message}
                    />
                    <Input
                        name='password'
                        type='password'
                        label='Пароль'
                        register={register}
                        error={errors.password?.message}
                    />
                    <Checkbox
                        className='loginPage__checkbox'
                        label='Запомнить меня'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <Button type='submit' className='loginPage__button'>Войти</Button>
                </form>
                <div className='loginPage__links'>
                    <Link className='loginPage__link' to='#'>Я забыл пароль</Link>
                    <Link className='loginPage__link' to='#'>Войти как тренер</Link>
                </div>
            </div>
            <div className='loginPage__registration'>
                <p>Нет аккаунта?</p>
                <Link className='loginPage__link' to='#'>Зарегистрироваться</Link>
            </div>
            <div className='loginPage__location'>
                <p
                    className={`loginPage__location-lang ${activeLanguage === 'RU' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('RU')}
                >
                    RU
                </p>
                <p
                    className={`loginPage__location-lang ${activeLanguage === 'EN' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('EN')}
                >
                    EN
                </p>
            </div>
        </Container>
    )
}

export default LoginPage
