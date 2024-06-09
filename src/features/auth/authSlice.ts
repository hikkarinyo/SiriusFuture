import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    isAuthenticated: boolean
    user: {
        email: string
    } | null
}

// Функция для чтения состояния аутентификации из localStorage
const loadState = (): AuthState => {
    try {
        const serializedState = localStorage.getItem('authState')
        if (serializedState === null) {
            return { isAuthenticated: false, user: null }
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return { isAuthenticated: false, user: null }
    }
}

// Функция для сохранения состояния аутентификации в localStorage
const saveState = (state: AuthState) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('authState', serializedState)
    } catch (err) { /* empty */ }
}

const initialState: AuthState = loadState()

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string }>) => {
            state.isAuthenticated = true
            state.user = { email: action.payload.email }
            saveState(state)
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            saveState(state)
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
