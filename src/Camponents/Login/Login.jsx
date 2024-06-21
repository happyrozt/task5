import React, { useEffect, } from 'react';
import Form from '../FormCamponent/Form';
import './loginstyle.css';
import { useNavigate } from 'react-router';
import { useMyContext } from '../../MyContext';
export default function Login() {
    const { userData } = useMyContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (userData !== null && userData.userLoggedIn) {
            navigate('/dashboard')
        }
    }, [])
    return (
        <div className='login-container'>
            <Form isLogin={true} />
        </div>

    );
}
