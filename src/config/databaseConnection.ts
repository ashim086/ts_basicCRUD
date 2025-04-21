import mongoose from 'mongoose'

export const mongodbconnection = (uri: string) => {
    mongoose.connect(uri)
        .then(() => {
            console.log("database connected succefully")
        })
        .catch((error) => { console.log(error) })
}