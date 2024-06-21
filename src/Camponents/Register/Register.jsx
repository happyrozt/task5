import React, { useEffect, useState } from 'react'; 
import './register.css';
import Form from '../FormCamponent/Form';
import { useNavigate } from 'react-router';
import { useMyContext } from '../../MyContext';
export default function Register() {
  const {userData } = useMyContext();
  const navigate = useNavigate();

useEffect(()=>{
  if(userData !== null){
    navigate('/dashboard')
  }
})
  return (
    <Form isLogin={false} />
  );
}
