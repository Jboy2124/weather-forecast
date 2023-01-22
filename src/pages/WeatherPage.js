import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { api } from '../utils/Axios';
import { useSelector } from 'react-redux';

const WeatherPage = (props) => {
  const [data, setData] = useState([])
  const city = useSelector((state) => state.currentCity.value)
  
  const getData = async() => {
    await api({
      method: 'GET',
      params: { appid: '556fb9d3a547ba28fe5fcfd06959bff1', q: city.city },
    })
    .then(response => {
      setData(response.data.weather)
      console.log(response.data)
    })
  }
  

  useEffect(() => {
    getData()
  }, [props])

  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-[20vh]'>
                <div>
                  {data.map(items => {
                    return(
                      <li>{items}</li>
                    )
                  })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherPage