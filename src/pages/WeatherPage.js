import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { api } from '../utils/Axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState([])
  const currentCity = useSelector((state) => state.currentCity.value)
  const navigate = useNavigate()


  useEffect(() => {
    const getData = async() => {
      await api({
        method: 'GET',
        params: { q: currentCity.city },
      })
      .then(response => {
        setWeatherData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }

    getData()
  }, [])

  
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-[90vh]'>

                <div>{weatherData?.name}, {weatherData.sys?.country}</div>
                <div className='flex justify-center items-center min-h-[30vh] overflow-hidden'>
                   <table className='min-w-full text-center border'>
                      <thead className='border-b bg-gray-500 text-white'>
                          <tr>
                            <th scope='col' className='text-center border-r'>Date</th>
                            <th scope='col' className='text-center border-r'>Temp(F)</th>
                            <th scope='col' className='text-center border-r'>Description</th>
                            <th scope='col' className='text-center border-r'>Main</th>
                            <th scope='col' className='text-center border-r'>Pressure</th>
                            <th scope='col' className='text-center border-r'>Humidity</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='border-r'>{weatherData?.dt}</td>
                          <td className='border-r'>{weatherData.main?.temp}</td>
                          <td className='border-r'>{weatherData.weather?.[0].description}</td>
                          <td className='border-r'>{weatherData.weather?.[0].main}</td>
                          <td className='border-r'>{weatherData.main?.pressure}</td>
                          <td className='border-r'>{weatherData.main?.humidity}</td>
                        </tr>
                      </tbody>
                   </table>
                </div>
                <div className='flex justify-end items-center'>
                  <button type="button" className='rounded bg-[#1F3C88] text-white px-12 py-2' onClick={() => navigate('/')}>Back</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherPage