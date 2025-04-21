import { NextFunction, Request, Response } from "express";
import { product } from "../models/ProductSchema.js";
import { asyncHandler } from "../util/asyncHandler.js";

export const addProduct = asyncHandler(async (req: Request, res: Response) => {


    const { name, description, price, category, brand, stock, rating } = req.body;

    const newProduct = {
        name: name,
        description: description,
        price: price,
        category: category,
        brand: brand,
        stock: stock,
        rating: rating
    }

    const createProduct = await product.create(newProduct)

    res.status(200).json({
        message: "new product added successfully", createProduct,
        success: true
    })

})

export const getAllProducts = asyncHandler(async (req: Request, res: Response) => {

    const allProducts = await product.find();
    res.status(200).json({
        message: "products:", allProducts,
        success: true
    })

})


export const getProductByName = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {


    // Force an error to test global error handler
    // throw new Error("Forced error for testing");

    const productName = req.params.name;

    const productbyname = await product.find({ name: productName });

    res.status(200).json({
        message: "product:", productbyname,
        success: true
    })

}

)


export const updateProduct = asyncHandler(async (req: Request, res: Response) => {


    const productName = req.params.name;

    const update = req.body;

    const updated = await product.findOneAndUpdate({ name: productName }, update);

    res.status(200).json({
        message: "updatedSuccessfully:", updated,
        success: true
    })
    
})

export const delProduct = asyncHandler(async (req: Request, res: Response) => {


    const productName = req.params.name;

    const deletedProduct = await product.findOneAndDelete({ name: productName });

    res.status(200).json({
        message: "deletedSuccessfully:", deletedProduct,
        success: true
    })

})