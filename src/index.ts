import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello!');
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
})
