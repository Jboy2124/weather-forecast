import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#5893D4] shadow-lg'>
        <div className='container mx-auto'>
            <div className='min-h-[80px] flex justify-between items-center'>
                {/* Logo & Company Name  */}
                <div className='flex justify-start items-center space-x-2'>
                    <div className='text-[40px] flex items-center text-[#1F3C88]'>
                        <ion-icon name="thunderstorm-sharp"></ion-icon>
                    </div>
                    <div className='text-[20px] font-semibold'>
                        <span className='text-white'>WEATHER</span>
                        <span className='text-[#F7B633]'>FORECAST</span>
                    </div>
                </div>
                {/* Logout button  */}
                <div className='flex items-center'>
                    <button type="button" className='rounded shadow-lg bg-[#1F3C88] px-12 py-2 text-white'>Logout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar