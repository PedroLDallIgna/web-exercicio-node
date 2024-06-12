import mongoose from "mongoose";
import getMongoDbURI from "./getMongoDbURI";
import dotenv from "dotenv";
dotenv.config()

const URI = getMongoDbURI();

declare global {
    var mongooseConnection: any;
}

/**
 * Estabelece uma conexão com o banco de dados MongoDB.
 * Essa função é assíncrona e retorna uma Promise.
 * Se a conexão já estiver estabelecida, nada é feito.
 * 
 * @returns {Promise<void>} Uma Promise que é resolvida quando a conexão é estabelecida.
 * @throws {Error} Se houver algum erro ao estabelecer a conexão.
 */
const databaseConnection = async () => {
    if (!global.mongooseConnection) { 
        mongoose.set("strictQuery", false);
        global.mongooseConnection = await mongoose.connect(URI)
        .then(() => {
            console.log('Connected to MongoDB established')
        })
        .catch((err) => {
            throw new Error('Error establishing the connection to MongoDB: ' + err);
        })
    }
}
export default databaseConnection;
