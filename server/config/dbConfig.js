import { config } from "dotenv";


import pkg from 'pg'

// Load environment variables
config();

const {Pool} = pkg ;

export const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Modify the connectToDataBase function to use async/await
export const connectToDataBase = async () => {
    try {
        // Use the promise-based `getConnection` method
        const connection = await pool.connect();
        console.log("Database Connected Successfully");
        connection.release() // Release the connection after use
    } catch (error) {
        console.error("Error while connecting to the database:", error);
        throw error;
        throw new Error("Getting error while connecting to the database");
    }
};
