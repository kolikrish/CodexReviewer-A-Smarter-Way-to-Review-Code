const express = require('express');
const app = express()
const aiRoutes = require('./routes/ai.routes');
const userRoutes = require('./routes/user.route.js');
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

const connectDB = require('./config/db.js');
connectDB();

app.get('/',(req,res) => {
    res.send('Hello world');
})

app.use('/ai',aiRoutes);
app.use('/user',userRoutes);

module.exports = app;