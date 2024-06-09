import * as yup from 'yup'

export const schemaAuthForm = yup
    .object({
        email: yup.string().required(),
        password: yup.string().required(),
    })