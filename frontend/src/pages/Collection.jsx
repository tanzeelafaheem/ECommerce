import React, { useContext,useEffect,useInsertionEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products}=useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false);
  const [filterProduct,setFilterProduct]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relevant')
  const toggleCategory=(e)=>{
    if (category.includes(e.target.value)) {
      setCategory(prev=>(prev.filter(item=>item!==e.target.value)))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const toggleSubCategory=(e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=>(prev.filter(item=>item!==e.target.value)))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }
  const applyFilter=()=>{
    let productsCopy=products.slice();
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if (subCategory.length>0) {
      productsCopy=productsCopy.filter(item=>(subCategory.includes(item.subCategory)))
      
    }
    setFilterProduct(productsCopy);
  }
  const sortProduct=()=>{
    let fpCopy=filterProduct.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProduct(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterProduct(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
      default: applyFilter();
        break;
    }
  }
  useEffect(()=>{
    sortProduct();
  },[sortType])
  useEffect(()=>{
  applyFilter();
  },[category,subCategory,products])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*filter options */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img  className={`h-3 sm:hidden ${showFilter?'rotate-90':''} `}src={assets.dropdown_icon} alt="" />
        </p>
        {/* category */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className="flex flex-col  gap-2 text-sm font:light text-gray-700">
          <p className='felx gap-2'>
            <input className='w-3' type="checkbox" value={'Men'} onClick={toggleCategory}/> Men
          </p>
          <p className='felx gap-2'>
            <input className='w-3' type="checkbox" value={'Women'} onClick={toggleCategory}/> Women
          </p>
          <p className='felx gap-2'>
            <input className='w-3' type="checkbox" value={'Kids'} onClick={toggleCategory}/> Kids
          </p>
        </div>
        </div>
        {/* Subcategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className="flex flex-col  gap-2 text-sm font:light text-gray-700">
          <p className='felx gap-2'>
            <input className='w-3' type="checkbox" value={'Topwear'} onClick={toggleSubCategory}/>Topwear 
          </p>
          <p className='felx gap-2'>
            <input className='w-3' type="checkbox" value={'Bottomwear'} onClick={toggleSubCategory}/> Bottomwear
          </p>
          <p className='felx gap-2'>
            <input className='w-3' type="checkbox" value={'Winterwear'} onClick={toggleSubCategory}/> Winterwear
          </p>
        </div>
        </div>
      </div>
      {/* right-side */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Sort */}
          <select onChange={(e)=>setSortType(e.target.value)}className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
       {
        filterProduct.map((item,index)=>(
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))
       }
        </div>
      </div>
    </div>
  )
}

export default Collection
