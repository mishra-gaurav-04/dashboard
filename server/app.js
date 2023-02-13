const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const app = express();

// env setup
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;
// middlewares
app.use(cors());
app.use(express.json({limit:'50mb'}));
// routes
app.get('/',(req,res,next) => {
    res.send('Hello World');
})

const startServer = async () => {
    try {
        await connectDB(MONGO_URI);
        app.listen(PORT,() => {
            console.log('Server Started');
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();
