import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { RootState } from '@/store/store.ts'

interface ProtectedRouteProps {
    element: JSX.Element
}

const ProtectedRoute = ({ element }: ProtectedRouteProps ) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    return isAuthenticated ? element : <Navigate to="/login" />
}

export default ProtectedRoute
