const mongoose = require('mongoose');

module .exports = async function connectDB (){
    await mongoose.connect(process.env.MONGO_URI, { 
       //>neshasubedi07_db_user;PBtH8YGo9FMM6eai);</db_tH8YGo9FMM6eai>
    console.log ('MongoDB connected successfully');
};