import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token,setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        // Registration
        console.log("Registering with:", { name, email, password });
        const response = await axios.post(
          `${backendUrl}/api/user/register`,
          { name, email, password },
          { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("Registration successful!");
        }
      } else {
        
        console.log("Logging in with:", { email, password });
        const response = await axios.post(
          `${backendUrl}/api/user/login`,
          { email, password },
          { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("Login successful!");
        }
      }
    } catch (error) {
      console.error(`${currentState} Error:`, error.response?.data || error.message);
      toast.error(error.response?.data?.message || `${currentState} failed`);
    }
  };
  useEffect(() => {
    if(token) {
      navigate('/');
    }
  },[token]);

  return (
    <form onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] max-w-[400px] m-auto mt-14 gap-4 text-gray-800'>
      
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Login' ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className='w-full px-3 py-2 border border-gray-800 text-base'
          placeholder='Name'
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className='w-full px-3 py-2 border border-gray-800 text-base'
        placeholder='Email'
        required
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className='w-full px-3 py-2 border border-gray-800 text-base'
        placeholder='Password'
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Already have an account?</p>
        }
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
