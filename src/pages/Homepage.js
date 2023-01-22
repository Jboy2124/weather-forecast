import React from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div>Homepage</div>
            </div>
        </div>
    </div>
  )
}

export default Homepage