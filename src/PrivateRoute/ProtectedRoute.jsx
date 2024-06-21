
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../MyContext.jsx';

const ProtectedRoute = ({ element }) => {
  const  {userData } = useContext(MyContext);

  return (
   (userData && userData.userLoggedIn ) === true ? element : <Navigate to="/login" />);
};

export default ProtectedRoute;
