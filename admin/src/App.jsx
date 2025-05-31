import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer} from 'react-toastify';
import { useState,useEffect } from 'react';

export const backendUrl=import.meta.env.VITE_BACKEND_URL;

const App = () => {

  const [token, setToken] = React.useState(localStorage.getItem('token') || "");
  useEffect(() => {
    localStorage.setItem('token',token);
   },[token]);
  return (
    <div className='bg-gray-50 min-h-screen '>
    <ToastContainer/>    
    {token===""?<Login setToken={setToken}/>:
     <>
   <Navbar setToken={setToken}/>
   <div className='flex w-full'> 
   <Sidebar/>
   <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
    <Routes>
      <Route path='/add' element={<Add token={token}/>}/>
      <Route path='/list' element={<List token={token}/>}/>
      <Route path='/orders' element={<Orders token={token}/>}/>
    </Routes>
   </div>
   </div>
  </>
  }
   </div>
  )
}

export default App
