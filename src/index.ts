import express, { Request } from "express";
import userRoute from "./routes/user.routes.js";
import { mongodbconnection } from "./config/databaseConnection.js";
import productRoute from "./routes/ProductROute.js";
import { globalHandlerError } from "./middleware/globalErrorHandler.js";
import { asyncHandler } from "./util/asyncHandler.js";

const app = express();
const PORT = 4000;


// datbase connecton
mongodbconnection('mongodb://127.0.0.1:27017/MY_database')



// middlewares
//Application middleware all over app (IN-BUILT);

app.use(express.json()); //for object;
app.use(express.urlencoded()); //for images;
app.use(express.static('static')) //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express;

// ROutes
app.use('/user', userRoute);
app.use('/product', productRoute)


// app.get("/error", asyncHandler(async (req, res) => {
//     throw new Error("Something went wrong!");
// }));


// error handler
app.use(globalHandlerError)


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server Running at ${PORT}`)
})