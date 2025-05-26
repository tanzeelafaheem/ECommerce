import productModel from '../models/productModel.js'
import cloudinary from '../config/cloudinary.js';
// To add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;
        const image1 = Array.isArray(req.files.image1) ? req.files.image1[0] : req.files.image1;
        const image2 = Array.isArray(req.files.image2) ? req.files.image2[0] : req.files.image2;
        const image3 = Array.isArray(req.files.image3) ? req.files.image3[0] : req.files.image3;
        const image4 = Array.isArray(req.files.image4) ? req.files.image4[0] : req.files.image4;

        const images=[image1, image2, image3, image4].filter((item)=>item!==undefined)
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        ) 
        // console.log(name, description, price, category, subcategory, sizes, bestSeller);
        // console.log(images);
        const productData={
            name,
            description,
            price:Number(price),
            category,
            subCategory,
            sizes:JSON.parse(sizes),
            bestSeller:bestSeller === 'true' ? true : false,
            image: imagesUrl,
            date:Date.now()   
        }
        console.log(productData);
        const product = new productModel(productData);
        await product.save(); 
        res.json({ success: true,message: 'Product added successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// List products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Removing product
const removeProduct = async (req, res) => {
   try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Product removed successfully' });
   } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
   }
};

// Get by ID
const singleProduct = async (req, res) => {
    try {
       const {productId} = req.body;
       const product = await productModel.findById(productId);
       res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addProduct, listProducts, removeProduct, singleProduct };