import React, { useContext, useState } from 'react'
import './headerstyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { MyContext } from '../../MyContext';
export default function Header() {
  const {setUserData} = useContext(MyContext)
  const navigate = useNavigate;
  const handleLogout = () => {
    setUserData(null)
    localStorage.removeItem('userData'); 
    navigate('/login');
};

  return (
    <div className='headerDiv'>
      <div className='HeaderTitle'>User Dashboard</div>
      <div className='logoutButtonDiv'>
        <button><FontAwesomeIcon icon={faSignOutAlt} onClick={handleLogout} /></button>
      </div>
       
    </div>
  )
}
