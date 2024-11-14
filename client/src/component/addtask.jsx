import React, { useState } from 'react';
import TaskDetailForm from './taskform';

const AddTaskCard = () => {
  const [click, setClick] = useState(false);

  // Toggle the form visibility
  const onAddTask = () => {
    setClick(!click); // This will toggle the visibility of the form
  };

  return (
    <>
      {click && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-50 backdrop-blur-lg h-full">
          <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 overflow-auto h-auto mt-10 mb-10">
            {/* Pass onAddTask as onSave to close the popup when the form is submitted */}
            <TaskDetailForm onSave={onAddTask} />
            <button
              onClick={() => setClick(false)} 
              className="absolute top-4 right-96 text-black text-5xl rounded-lg border-black border-2 "
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center space-y-4">
        <h2 className="text-xl font-bold text-gray-700">Task Manager</h2>
        <p className="text-gray-600">
          Organize your tasks efficiently. Click "Add Task" to create a new task and keep track of your to-dos. 
          Adding tasks helps you manage your work, set reminders, and stay on top of deadlines.
        </p>
        <button
          onClick={onAddTask}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default AddTaskCard;
