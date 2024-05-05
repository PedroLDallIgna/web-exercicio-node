import mongoose from "mongoose";
import getMongoDbURI from "./getMongoDbURI";
import { MongoMemoryServer } from "mongodb-memory-server";
import dotenv from "dotenv";
dotenv.config()

let mongod: MongoMemoryServer | null = null;

declare global {
    var mongooseConnection: any;
}

export const connectDB = async () => {
    try {
        let dbUrl = getMongoDbURI();
        if (process.env.NODE_ENV === 'test') {
            mongod = await MongoMemoryServer.create();
            dbUrl = mongod.getUri(); 
        }

        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(dbUrl);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

export const disconnectDB = async () => {
    try {
      await mongoose.connection.close();
      if (mongod) {
        await mongod.stop();
      }
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
}
