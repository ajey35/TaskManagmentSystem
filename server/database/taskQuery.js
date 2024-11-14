import { pool } from "../config/dbConfig.js";

// Fetch all tasks for a specific user
export const fetchAllTasks = async (userId) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw new Error('Unable to fetch tasks');
  }finally{
    if(client){
      client.release();
    }
  }
};

// Insert a new task for a specific user
export const InsertTask = async (taskData) => {
  const { tname, desc, dd, pp,stat,prio, usrid } = taskData;
  let client;
  try {
   client = await pool.connect();
    const result = await client.query(
      'INSERT INTO tasks (title, description, dd, pp, status,priority , user_id) VALUES ($1,$2, $3, $4, $5, $6, $7) returning id',
      [tname, desc, dd, pp, stat, prio, usrid]
    );
    console.log(result.rows[0].id );
    return { message: 'Task created successfully', taskId: result.rows[0].id  };
  } catch (error) {
    console.error('Error inserting task:', error);
    throw new Error('Unable to insert task');
  }finally{
    if(client){
      client.release();
    }
  }
};

// Fetch a specific task by user ID and task ID
export const fetchTask = async (userId, taskId) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query('SELECT * FROM tasks WHERE user_id = $1 AND id = $2', [userId, taskId]);
    if (result.rows.length === 0) {
      throw new Error('Task not found');
    }
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching task:', error);
    throw new Error('Unable to fetch task');
  }finally{
    if(client){
      client.release();
    }
  }
};

// Modify a specific task by user ID and task ID
export const ModifyTask = async (taskData) => {
  const { desc, dd, pp, stat ,prio ,usrId ,tskId} = taskData;
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(
      'UPDATE tasks SET description = $1, dd = $2, pp= $3, status = $4, priority = $5 WHERE user_id = $6 AND id = $7',
      [desc, dd, pp, stat, prio, usrId, tskId]
    );    
    console.log(result);
    if (result.affectedRows === 0) {
      throw new Error('Task not found');
    }
    return { message: 'Task updated successfully' };
  } catch (error) {
    console.error('Error modifying task:', error);
    throw new Error('Unable to update task');
  }finally{
    if(client){
      client.release();
    }
  }
};

// Delete a task by user ID and task ID
export const TruncateTask = async (userId, taskId) => {
  var client;
  try {
    console.log(`Attempting to delete task with userId: ${userId} and taskId: ${taskId}`);

    // Check if the task exists before deletion
    client = await pool.connect();
    const result1 = await client.query('SELECT * FROM tasks WHERE user_id = $1 AND id = $2', [userId, taskId]);

    console.log(result1);
    if (result1.length === 0) {
      console.log(`No task found with userId: ${userId} and taskId: ${taskId}`);
      throw new Error('Task not found');
    }

    // If the task exists, delete it
    const result2 = await client.query('DELETE FROM tasks WHERE user_id = $1 AND id = $2 returning id', [userId, taskId]);
    if (result2.affectedRows === 0) {
      throw new Error('Task not found');
    }
    return { message: 'Task deleted successfully',deletedId : result2.rows[0].id};
  } catch (error) {
    console.error('Error deleting task:', error.message);
    throw new Error('Unable to delete task');
  }finally{
    if(client){
      client.release();
    }
  }
};
