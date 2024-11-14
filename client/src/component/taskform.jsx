import React, { useState } from 'react';

const TaskDetailForm = ({ onSave }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium',
    progress: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // After submitting, we call onSave to trigger the popup close in the parent component
    onSave(); 
  };

  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add Task Details</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-gray-600 font-medium">Task Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-gray-600 font-medium">Task Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the task"
          />
        </div>

        {/* Deadline */}
        <div>
          <label htmlFor="deadline" className="block text-gray-600 font-medium">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Priority */}
        <div>
          <label htmlFor="priority" className="block text-gray-600 font-medium">Priority</label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Progress */}
        <div>
          <label htmlFor="progress" className="block text-gray-600 font-medium">Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            min="0"
            max="100"
            value={task.progress}
            onChange={handleChange}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-gray-600">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskDetailForm;
