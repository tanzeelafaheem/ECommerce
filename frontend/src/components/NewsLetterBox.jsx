import React from 'react'

const NewsLetterBox = (event) => {
    const OnSubmit=()=>{
    event.preventDefault();
    }
  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now! & get 20% "Off"</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quam.
        </p>
        <form 
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full outline-none sm:flex-1' type="email" placeholder='Enter your email'  required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
