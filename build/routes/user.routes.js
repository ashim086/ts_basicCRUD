import express from 'express';
import { addNewUser, getAllUser, getSingleUserByID, removeUser, updateUser } from '../controllers/user.controller.js';
const userRoute = express.Router();
// get all users
userRoute.get('/', getAllUser);
// get singleUser
userRoute.get('/:id', getSingleUserByID);
// post new user
userRoute.post('/', addNewUser);
// update user detail using id
userRoute.patch('/:id', updateUser);
// delete user detail using id
userRoute.delete('/:id', removeUser);
export default userRoute;
