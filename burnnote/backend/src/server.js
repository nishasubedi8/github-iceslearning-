require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (req, res) => {
  res.send('Burnnote API is running');  
});

connectDB();
then(() => {
    app.listen(process .env.PORT || 3000, () => 
        console.log('Server is running on port'+(process.env.PORT || 3000))
    );
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
});
app.listen (3000, () => {
  console.log('Server is running on port 3000');
});