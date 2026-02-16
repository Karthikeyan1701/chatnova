import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('ChatNova API running');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);