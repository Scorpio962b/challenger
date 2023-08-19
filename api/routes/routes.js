// import express
import express from "express";
  
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controller/Product.js";
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/product', showProducts);
  
// Get Single Product
router.get('/product/:id', showProductById);
  
// Create New Product
router.post('/product', createProduct);
  
// Update Product
router.put('/product/:id', updateProduct);
  
// Delete Product
router.delete('/product/:id', deleteProduct);
  
// export default router
export default router;