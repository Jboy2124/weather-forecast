import React from 'react'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-[90vh] flex justify-center items-center'>
                <div>
                    <h4>Welcome to the weather forecast web application. Please login with your Github User to use the application and view weather in your city.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage