import app from './app';
import databaseConnection from './utils/database';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log('Listening on port', PORT);
    await databaseConnection();
})
