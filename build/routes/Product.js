import { Router } from "express";
import { addProduct } from "../controllers/productController.js";
const productRoute = Router();
// productRoute.get('/',addProduct)
// productRoute.get('/', getByProductName)
productRoute.post('/', addProduct);
// productRoute.patch('/',addProduct)
// productRoute.delete('/',addProduct)
export default productRoute;
