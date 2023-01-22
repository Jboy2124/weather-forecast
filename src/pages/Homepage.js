import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'

const Homepage = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-[90vh] flex justify-center items-center'>
                <div className='flex flex-col items-center'>
                    <div className='pb-4'>Name</div>
                    <div className='pb-4'>github</div>
                    <Searchbar />
                    <div className='py-2'>
                        <button type='submit' className='px-12 py-2 rounded-lg shadow-lg bg-[#1F3C88] text-white'>Display Weather</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage