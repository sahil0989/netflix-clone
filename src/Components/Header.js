import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

export default function Header() {

  const { user, logout } = useContext(AuthContext);
  const [color, setColor] = useState('bg-transparent');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor('bg-black');
    } else {
      setColor('bg-transparent');
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div className={`fixed flex items-center justify-between p-4 z-[100] w-full text-white font-semibold ${color} `}>
        <h1 className='text-red-600 text-3xl font-bold cursor-pointer'>Movies</h1>
      {!user?.email ?
        <div>
          <Link to="/">
            <button className='pr-4'>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className='bg-red-600 px-6 py-2 rounded-md cursor-pointer'>Sign Up</button>
          </Link>
        </div>
        :
        <div>
          <Link to="/">
            <button className='bg-red-600 px-6 py-2 rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      }
    </div>
  )
}
