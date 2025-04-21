import { Router } from "express";
import { addProduct, delProduct, getAllProducts, getProductByName, updateProduct } from "../controllers/productController.js";
const productRoute = Router();
productRoute.get('/', getAllProducts);
productRoute.get('/:name', getProductByName);
productRoute.post('/', addProduct);
productRoute.patch('/:name', updateProduct);
productRoute.delete('/:name', delProduct);
export default productRoute;
