import React from 'react'

const Searchbar = () => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-[30px] w-[400px] bg-white border border-gray-400 rounded-full flex items-center'>
                <div className='text-[20px] text-gray-500 flex justify-center items-center cursor-pointer px-2'>
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                <div className='p-[6px] w-full flex items-center'>
                    <input type='text' className='text-[14px] w-full h-[30px] outline-none'></input>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbar