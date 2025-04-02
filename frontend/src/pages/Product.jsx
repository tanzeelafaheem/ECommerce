import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {
  const {productId}=useParams();
  const {products,currency,addToCart}=useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('');
  const [size,setSize]=useState('')
  
  const fetchProductData=async()=>{
  products.map((item)=>{
 if (item._id===productId) {
  setProductData(item);
  setImage(item.image[0]);
  // console.log(item)
  return null;
 }
  })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId,products])
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
    <div className="flex flex-col sm:flex-row gap-10">
     
      <div className="flex sm:flex-col sm:h-[500px] overflow-x-auto sm:overflow-y-auto justify-between sm:w-[15%] w-full">
        {productData.image.map((item, index) => (
          <img
            src={item}
            key={index}
            onClick={() => setImage(item)}
            className="w-[24%] sm:w-full h-[100px] sm:h-[25%] object-cover cursor-pointer"
          />
        ))}
      </div>
  
      <div className="w-full sm:w-[40%]">
        <img className="w-full h-[500px] object-cover" src={image} alt="Selected Product" />
      </div>
  
      {/* Product Info */}
      <div className="flex-1 sm:w-[45%]">
        <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
  
        <div className="flex items-center gap-1 mt-2">
          {[...Array(4)].map((_, index) => (
            <img key={index} className="w-3.5" src={assets.star_icon} alt="star" />
          ))}
          <img className="w-3.5" src={assets.star_dull_icon} alt="star dull" />
          <p className="pl-2 text-gray-600">(122)</p>
        </div>
  
        <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
  
        <p className="mt-5 text-gray-700">{productData.description}</p>
  
        <div className="flex flex-col gap-4 my-8">
          <p className="font-medium">Select Size</p>
          <div className="flex gap-2">
            { productData.sizes.map((item,index)=>(
            <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size?'border-orange-500':''}`} key={index}>{item}</button>
            ))}
          </div>
        </div>
        <div onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-3xs cursor-pointer">ADD TO CART</div>
        <hr className='mt-8 sm:w-4/5'/>
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
          <p>100% Original Product</p>
          <p>Cash on delivery is available</p>
          <p>Easy returns and exchange policy of 7 days</p>
        </div>
      </div>
    </div>
    {/* description */}
    <div className="mt-20">
      <div className="flex">
        <p className='border px-5 py-3 text:sm'>Description</p>
        <p className='border px-5 py-3 text:sm'>Reviews(122)</p>
      </div>
      <div className="flex flex-col gap-4 border px-6 py-6 text:sm text-gray-500">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut, inventore, maiores ullam minus doloremque im</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod sint alias incidunt in velit</p>
      </div>
    </div>
  </div>
  
  
  ):(
    <div className="opacity-0"></div>
  )
}

export default Product
