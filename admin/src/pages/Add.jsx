import React from "react";
import { useState } from "react";
import { assets } from "../assets/admin_assets/assets";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmit =async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestSeller", bestSeller);
      

    } catch (error) {
      
    }
  }
  return (
    <form onSubmit={onSubmit}className="flex flex-col w-full items-start gap-3">
      <div className="">
        <p className="mb-2"> Upload image</p>
        <div className="flex gap-4">
          <label htmlFor="image1">
            <img className="w-20" 
            src={!image1?assets.upload_area:URL.createObjectURL(image1)} />
            <input onChange={(e)=>{setImage1(e.target.files[0])}} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" 
            src={!image2?assets.upload_area:URL.createObjectURL(image2)} />
            <input onChange={(e)=>{setImage1(e.target.files[0])}} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" 
            src={!image3?assets.upload_area:URL.createObjectURL(image3)} />
            <input onChange={(e)=>{setImage1(e.target.files[0])}} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4' ">
            <img className="w-20" 
            src={!image4?assets.upload_area:URL.createObjectURL(image4)} />
            <input onChange={(e)=>{setImage1(e.target.files[0])}} type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="wb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full px-2 py-1 border rounded-md"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="wb-2">Product Description</p>
        <textarea
         onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full px-2 py-1 border border-gray-300 rounded-md"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div className="">
          <p className="mb-2">Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category}
          className="w-full px-2 py-1 border rounded-md">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p onChange={(e) => setSubCategory(e.target.value)} value={subCategory}
          className="mb-2">Sub Category</p>
          <select className="w-full px-2 py-1 border rounded-md">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div className="">
          <p className="mb-2">Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)}
          value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>
      <div>
  <p className="mb-2">Product sizes</p>
  <div className="flex gap-3">
    {["S", "M", "L", "XL", "XXL"].map((size) => (
      <div key={size} onClick={() => setSizes((prev) =>
        prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]
      )}>
        <p className={`px-3 py-1 cursor-pointer  ${sizes.includes(size) ? "bg-pink-200" : "bg-slate-200 border-transparent"}`}>
          {size}
        </p>
      </div>
    ))}
  </div>
</div>
      <div className="flex gap-2 mt-2">
        <input onChange={(e) => setBestSeller(e.target.checked)}
        checked={bestSeller}
        type="checkbox" id="bestSeller" />
        <label className="cursor-pointer" htmlFor="bestSeller">
          Add to Best Seller
        </label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
