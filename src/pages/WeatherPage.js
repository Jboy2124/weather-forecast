import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { api } from '../utils/Axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const WeatherPage = () => {
  // const [weatherData, setWeatherData] = useState([])
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [dt, setDate] = useState('')
  const [temp, setTemp] = useState('')
  const [desc, setDesc] = useState('')
  const [main, setMain] = useState('')
  const [pressure, setPressure] = useState('')
  const [humid, setHumid] = useState('')
  const currentCity = useSelector((state) => state.currentCity.value)
  const navigate = useNavigate()


  useEffect(() => {
    const getData = async() => {
      await api({
        method: 'GET',
        params: { q: currentCity.city },
      })
      .then(response => {
        setCity(response.data.name)
        setCountry(response.data.sys.country)
        setDate(response.data.dt)
        setTemp(response.data.main.temp)
        setDesc(response.data.weather[0].description)
        setMain(response.data.weather[0].main)
        setPressure(response.data.main.pressure)
        setHumid(response.data.main.humidity)
        // setWeatherData(response.data)
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

                <div>{city}, {country}</div>
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
                          <td className='border-r'>{dt}</td>
                          <td className='border-r'>{temp}</td>
                          <td className='border-r'>{desc}</td>
                          <td className='border-r'>{main}</td>
                          <td className='border-r'>{pressure}</td>
                          <td className='border-r'>{humid}</td>
                          {/* <td className='border-r'>{weatherData.dt}</td>
                          <td className='border-r'>{weatherData.main.temp}</td>
                          <td className='border-r'>{weatherData.weather[0].description}</td>
                          <td className='border-r'>{weatherData.weather[0].main}</td>
                          <td className='border-r'>{weatherData.main.pressure}</td>
                          <td className='border-r'>{weatherData.main.humidity}</td> */}
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