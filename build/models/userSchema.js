import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    first_name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    last_name: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
});
export const user = mongoose.model('user', userSchema);
