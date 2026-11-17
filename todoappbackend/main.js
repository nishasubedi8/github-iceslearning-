import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// 1. Schema Definition for Todo Item
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A title is required for your todo item'],
        trim: true
    },
    notes: {
        type: String,
        trim: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// 2. Compile Schema into a Model
const Todo = mongoose.model('Todo', todoSchema);

const app = express();

// Middleware to parse incoming JSON payloads (Crucial for CRUD later!)
app.use(express.json());

// 3. Database Connection Setup
// REMOVED < > brackets around your username and password. Added 'todo_db' as your target database.
const dbConnectionString = 'mongodb+srv://neshasubedi07_db_user:DssLvyiglqeYC32h@cluster0.clrdcsa.mongodb.net/todo_db?appName=Cluster0';

async function connectDB() {
    try {
        await mongoose.connect(dbConnectionString);
        console.log('Connected to MongoDB successfully.');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

// 4. Start Server and Connect DB
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connectDB(); // Run connection right as the server spins up
});
