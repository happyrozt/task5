
import React, { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from './Camponents/CostomHooks/useLocalStorage';
let userDetail = JSON.parse(localStorage.getItem("userData"));

export const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
}

export const MyProvider = ({ children }) => {
  const [userData, setUserData] = useLocalStorage('userData', null);
  
  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      {children}
    </MyContext.Provider>
  );
};
