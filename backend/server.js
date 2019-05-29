const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo'); 
const PORT = 4000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/todos";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});

app.use(cors());
app.use(bodyParser.json());

app.use('/todos',todoRoutes);




app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
});