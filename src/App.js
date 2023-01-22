import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage'
import NotFoundPage from './pages/NotFoundPage'

const Homepage = lazy(() => import('./pages/Homepage'))
const WeatherPage = lazy(() => import('./pages/WeatherPage'))

const App = () => {
  return (
    <Router>
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route exact path='/' element={<Homepage />}></Route>
                <Route path='/weather' element={<WeatherPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </Suspense>
    </Router>
  )
}

export default App