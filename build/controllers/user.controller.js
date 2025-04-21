import { user } from '../models/userSchema.js';
import { asyncHandler } from '../util/asyncHandler.js';
// get all users
export const getAllUser = asyncHandler(async (req, res) => {
    const users = await user.find();
    res.status(200).json({
        message: `get request success`, users,
        success: true
    });
});
// get singleUser
export const getSingleUserByID = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const data = await user.findById(id);
    res.status(200).json({
        message: "success",
        data,
        success: true
    });
});
// post new user
export const addNewUser = asyncHandler(async (req, res) => {
    const { first_name, last_name, email, gender } = req.body;
    const newUser = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender
    };
    const createNewUser = await user.create(newUser);
    res.status(200).json({
        users: createNewUser,
        success: true,
    });
});
// update user detail using id
export const updateUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updated = req.body;
    const updatedData = await user.findByIdAndUpdate(id, updated);
    res.status(200).json({
        message: "updated successfully",
        updatedData
    });
});
// delete user detail using id
export const removeUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const deletedUser = await user.findByIdAndDelete(id);
    res.status(200).json({
        message: "user deleted successfully", deletedUser
    });
});
