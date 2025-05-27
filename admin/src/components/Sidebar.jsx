import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className='flex flex-col gap-3 bg-white w-64 h-screen p-4 border-r border-gray-200'>
        <NavLink to='/add' className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'>
        <img className='w-5 h-5'src={assets.add_icon} alt="" />
        <p className='hidden md:block'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'>
        <img className='w-5 h-5'src={assets.order_icon} alt="" />
        <p className='hidden md:block'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'>
        <img className='w-5 h-5'src={assets.order_icon} alt="" />
        <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
