import mongoose from "mongoose";
import getMongoDbURI from "./getMongoDbURI";
import dotenv from "dotenv";
dotenv.config()

const URI = getMongoDbURI();

declare global {
    var mongooseConnection: any;
}

const databaseConnection = async () => {
    if (!global.mongooseConnection) { 
        mongoose.set("strictQuery", false);
        global.mongooseConnection = await mongoose.connect(URI)
        .then(() => {
            console.log('Connection to MongoDB established')
        })
        .catch((err) => console.error(err))
    }
}

export default databaseConnection;
