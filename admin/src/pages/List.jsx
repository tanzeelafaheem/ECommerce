import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { currency } from '../App';
import { assets } from '../assets/admin_assets/assets';

const List = ({token}) => {
const[list,setList]=useState([]);

const fetchList = async () => {
try {
  const response=await axios.get(backendUrl+'/api/product/list');
  console.log(response.data);
  if(response.data.success){
  setList(response.data.products);}
  else{
    toast.error(response.data.message);
  }
} catch (error) {
  console.log(error);
  toast.error(error.message|| 'Something went wrong');
}
}
const removeProduct = async (id) => {
try {
  const response=await axios.post(backendUrl+'/api/product/remove', { id },
    {headers: {token} }
  );
  if(response.data.success){
    toast.success(response.data.message);
   await fetchList(); 
  }
  else{
    toast.error(response.data.message);
  }
  
} catch (error) {
  console.log(error);
  toast.error(error.message || 'Something went wrong');
  
}
}
useEffect(() => {
  fetchList();
},[]);

  return (
    <>
    <p className='mb-2 text-black'>All Produts List</p>
    <div className='flex flex-col gap-2'>
      <div className='hidden md:grid md:grid-cols-5 md:gap-2 bg-gray-200 p-2 rounded-lg items-center text-black'>
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className='text-center'>Action</p>
      </div>
      {list.map((item) => (
        <div key={item._id} className='grid grid-cols-1 md:grid-cols-5 gap-2 bg-gray-100 p-2 rounded-lg items-center text-black'>
          <img src={item.image[0]} alt={item.name} className='w-16 h-16 object-cover' />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{currency}{item.price}</p>
          <div className='flex justify-center cursor-pointer'
          onClick={()=>removeProduct(item._id)}>X</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default List
