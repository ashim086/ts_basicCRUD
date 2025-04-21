import mongoose from 'mongoose';
export const mongodbconnection = (uri) => {
    mongoose.connect(uri)
        .then(() => {
        console.log("database connected succefully");
    })
        .catch((error) => { console.log(error); });
};
