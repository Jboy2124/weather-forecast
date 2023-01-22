import React from 'react'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-[90vh] flex justify-center items-center'>
                <div className='flex flex-col'>
                    <h4 className='text-[20px]'>Welcome to the weather forecast web application. Please login with your Github User to use the application and view weather in your city.</h4>
                    <div className='my-4'>
                        <button type='button' className='rounded-lg shadow-lg bg-[#1F3C88] px-12 py-2 text-[16px] text-white'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage