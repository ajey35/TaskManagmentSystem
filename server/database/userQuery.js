
import { pool } from "../config/dbConfig.js";

export const fetchUserByMail = async (email) => {
   let client 
    try {
      client  = await pool.connect()
      const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
      if (result.length === 0) {
        throw new Error('User not found');
      }
      console.log(result.rows[0]);
      return result.rows[0]; // Return the first user (since email is unique)
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw new Error('Unable to fetch user by email');
    } finally {
      if (client) {
        client.release();  // Release the client back to the pool
      }
    }

  };
  
  // Insert a new user into the database
  export const InsertUser = async (name, email, hashedPassword) => {
    let client 
    try {
      client  = await pool.connect()
      const result = await client.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) returning id;',
        [name, email, hashedPassword]
      );
      console.log(result.rows.id);
      return { message: 'User created successfully',};
    } catch (error) {
      console.error('Error inserting user:', error);
      throw new Error('Unable to insert user');
    } finally {
      if (client) {
        client.release();  // Release the client back to the pool
      }
    }
  };
  
  // Fetch all users from the database
  export const fetchAllUsers = async () => {
    let client;
    try {
      client  = await pool.connect()
      const [rows] = await client.query('SELECT * FROM users');
      return rows;
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw new Error('Unable to fetch all users');
    } finally {
      if (client) {
        client.release();  // Release the client back to the pool
      }
    }
  };
  
  // Fetch a user by userId
  export const fetchUserById = async (userId) => {
    let client;
    try {
      client  = await pool.connect()
      const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
      if (result.rows.length === 0) {
        throw new Error('User not found');
      }
      return result.rows[0]; // Return the user data
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw new Error('Unable to fetch user by ID');
    } finally {
      if (client) {
        client.release();  // Release the client back to the pool
      }
    }
  };