import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute.tsx'

import LoginPage from '@pages/LoginPage/LoginPage.tsx'
import SchedulePage from '@pages/SchedulePage/SchedulePage.tsx'

function App() {

  return (
    <>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/schedule" element={<ProtectedRoute element={<SchedulePage />} />} />
        </Routes>
    </>
  )
}

export default App
