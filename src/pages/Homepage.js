import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/slices/SliceCity'
import { useAuth0 } from '@auth0/auth0-react';


const Homepage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useAuth0();


  const submitInfo = (data) => {
    dispatch(actions.getCity(data))
    setTimeout(() => {
      navigate('/weather')
    }, 300)
  }



  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-[90vh] flex justify-center items-center'>
                <form onSubmit={handleSubmit(submitInfo)}>
                  <div className='flex flex-col items-center'>
                      <div>{user.name}</div>
                      <div>github</div>
                  </div>
                  <div className='flex items-center w-[400px] h-full rounded-full border border-gray-300 pr-[13px]'>
                    <div className='flex justify-center items-center text-[22px] text-gray-400 pl-2'>
                      <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <input type='text' {...register('city')} placeholder='City' className='text-[14px] outline-none h-[35px] w-full px-2'></input>
                  </div>
                  <div className='flex justify-center items-center py-3'>
                    <button type='submit' className='rounded shadow-lg bg-[#1F3C88] px-12 py-2 text-white'>Display Weather</button>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Homepage