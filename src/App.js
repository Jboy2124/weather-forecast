import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage'
import NotFoundPage from './pages/NotFoundPage'
// import ProtectRoutes from './utils/ProtectRoutes'
// import WeatherPage from './pages/WeatherPage'
// import LandingPage from './pages/WeatherPage'
// import Homepage from './pages/WeatherPage'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const Homepage = lazy(() => import('./pages/Homepage'))
const WeatherPage = lazy(() => import('./pages/WeatherPage'))

const App = () => {
  return (
    <Router>
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route exact path='/' element={<Homepage />}></Route>
                <Route path='/weather' element={<WeatherPage />}></Route>
                <Route path='/login' element={<LandingPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </Suspense>
    </Router>
  )
}

export default App