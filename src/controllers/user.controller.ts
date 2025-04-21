import { NextFunction, Request, Response } from 'express';
import { user } from '../models/userSchema.js';
import { asyncHandler } from '../util/asyncHandler.js';


//interface

interface userInterface {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string

}

// get all users

export const getAllUser = asyncHandler(async (req: Request, res: Response) => {

    const users = await user.find();

    res.status(200).json({
        message: `get request success`, users,
        success: true
    })

})

// get singleUser
export const getSingleUserByID = asyncHandler(async (req: Request, res: Response) => {

    const id = req.params.id;

    const data = await user.findById(id)
    res.status(200).json({
        message: "success",
        data,
        success: true
    })

})

// post new user

export const addNewUser = asyncHandler(async (req: Request, res: Response) => {

    const { first_name, last_name, email, gender } = req.body;

    const newUser: userInterface = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender
    }

    const createNewUser = await user.create(newUser);

    res.status(200).json({
        users: createNewUser,
        success: true,
    })

})

// update user detail using id

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    

    const id = req.params.id;

    const updated = req.body;

    const updatedData = await user.findByIdAndUpdate(id, updated);

    res.status(200).json({
        message: "updated successfully",
        updatedData
    })

}
)
// delete user detail using id

export const removeUser = asyncHandler(async (req: Request, res: Response,next:NextFunction) => {

    const id = req.params.id;
    const deletedUser = await user.findByIdAndDelete(id)

    res.status(200).json({
        message: "user deleted successfully", deletedUser
    })


})