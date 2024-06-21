import React, { useState } from 'react';
import "./formstyle.css";
import Input from '../InputCamponent/Input';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../MyContext';

export default function Form({ isLogin }) {
    const { userData, setUserData } = useMyContext();
    const navigate = useNavigate()
    const [inputType, setInputType] = useState({});
    const [errorType, setErrorType] = useState({});

    const validate = () => {
        const errors = {};
        let valid = true;

        if (!inputType.email || inputType.email.trim() === "") {
            errors.email = "Please enter email";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(inputType.email)) {
            errors.email = "Please enter a valid email";
            valid = false;
        }

        if (!inputType.password || inputType.password.trim() === "") {
            errors.password = "Please enter password";
            valid = false;
        } else if (inputType.password.length < 8) {
            errors.password = "Password length must be at least 8 characters";
            valid = false;
        }

        if (!isLogin) {
            if (!inputType.firstName || inputType.firstName.trim() === "") {
                errors.firstName = "Please enter first name";
                valid = false;
            }

            if (!inputType.lastName || inputType.lastName.trim() === "") {
                errors.lastName = "Please enter last name";
                valid = false;
            }
        } else {

            if (userData) {
                if (userData.email !== inputType.email) {
                    errors.email = "Email not registered";
                    valid = false;
                } else if (userData.password !== inputType.password) {
                    errors.password = "Incorrect password";
                    valid = false;
                }
            }
        }

        return { errors, valid };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { errors, valid } = validate();
        if (valid) {
            if (isLogin) {
                const updateUserData = {
                    ...userData,
                    userLoggedIn: true
                }
                setUserData(updateUserData)
                navigate('/dashboard');
            } else {
                const userData = {
                    email: inputType.email,
                    password: inputType.password,
                    firstName: inputType.firstName,
                    lastName: inputType.lastName
                };
                setUserData(userData)
                navigate('/login')

            }
        } else {
            setErrorType(errors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputType({
            ...inputType,
            [name]: value
        });
        setErrorType({
            ...errorType,
            [name]: ''
        });
    };

    let createInputArray = ['firstName','lastName','email','password'];

    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='heading'>{isLogin ? 'Login' : 'Register'}</h1>
                {createInputArray.filter(item=> isLogin ? ['email','password'].includes(item):true).map((items)=>(
                      <Input
                      key={items}
                      handleChange={handleChange}
                      inputType={inputType[items]}
                      name={items}
                      errorType={errorType[items]} />
                ))}
                <button className='form-button' type='submit'>{isLogin ? 'Login' : 'Register'}</button>
                <button type='button' className='form-toggle'>
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"} <Link className='link-style' to={isLogin ? "/register" : "/login"}>{isLogin ? "Register" : "Login"}</Link>
                    </p>

                </button>
            </form>
        </div>
    );
}
