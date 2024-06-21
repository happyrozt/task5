import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './dashBordStyle.css'
import { useMyContext } from '../../MyContext';
export default function Dashboard() {
const {userData} = useMyContext();
  

  return (
    <div className='dashboardContainer'>
      <div><Header /></div>
      <div className='mainContaint'>
        <div className='welcomeMessage'>Welcome {userData.firstName} {userData.lastName}</div>
        <div className='userEmail'>Email : {userData.email}</div>
      </div>
    </div>
  )
}
