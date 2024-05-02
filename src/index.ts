import express, {Request, Response} from 'express';
import databaseConnection from './utils/database';

import dotenv from 'dotenv';
dotenv.config()

import UsersController from './controllers/users.controller';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello!');
})

app.use("/users", UsersController)

app.listen(PORT, async () => {
    console.log('Listening on port', PORT);
    await databaseConnection();
})
