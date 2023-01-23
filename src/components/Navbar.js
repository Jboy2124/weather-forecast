import React from 'react'
import LogoutButton from './LogoutButton'
// import { menu } from '../constants/menu-const'
// import { Link } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    // const {
    //     logout,
    //   } = useAuth0();

    //   const logoutWhenClickLanding = (page) => {
    //     if(page === 'Landing Screen')
    //         logout({ returnTo: window.location.origin });
    //     else 
    //         return
    //   }

  return (
    <div className='bg-[#5893D4] shadow-lg'>
        <div className='container mx-auto'>
            <div className='min-h-[80px] flex justify-between items-center'>
                {/* Logo & Company Name  */}
                <div className='flex justify-start items-center space-x-10'>
                    <div className='flex justify-start items-center space-x-1'>
                        <div className='text-[40px] flex items-center text-[#1F3C88]'>
                            <ion-icon name="thunderstorm-sharp"></ion-icon>
                        </div>
                        <div className='text-[20px] font-semibold'>
                            <span className='text-white'>WEATHER</span>
                            <span className='text-[#F7B633]'>FORECAST</span>
                        </div>
                    </div>
                    {/* <div>
                        <ul className='flex justify-start items-center space-x-5'>
                            {menu.map(items => {
                                return(
                                    <li key={items.id}  onClick={() => logoutWhenClickLanding(items.name)}>
                                        <Link to={items.link}>{items.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> */}
                </div>
                {/* Logout button  */}
                <div className='flex items-center'>
                    <LogoutButton />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar