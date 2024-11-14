import React, { useState } from 'react';
import { HiOutlineClock, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi';

const TaskPopup = ({ task, closePopup, onSave }) => {
  // State for editing task details
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  // Set a color based on the priority value
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500 text-white';
      case 'Medium':
        return 'bg-yellow-500 text-white';
      case 'Low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editedTask); // Callback to save the changes
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleProgressChange = (e) => {
    const value = Math.min(Math.max(0, e.target.value), 100); // Limit progress between 0 and 100
    setEditedTask((prevState) => ({ ...prevState, progress: value }));
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg relative">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          &times;
        </button>

        {/* Task Title */}
        {isEditing ? (
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="text-2xl font-bold text-gray-800 mb-4 w-full p-2 border border-gray-300 rounded"
          />
        ) : (
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{editedTask.title}</h3>
        )}

        {/* Task Description */}
        {isEditing ? (
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="text-gray-700 mb-6 w-full p-2 border border-gray-300 rounded"
          />
        ) : (
          <p className="text-gray-700 mb-6">{editedTask.description}</p>
        )}

        {/* Task Details with Three-Column Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Deadline */}
          <div className="flex items-center">
            <HiOutlineClock className="text-gray-500 mr-2" />
            <div>
              <span className="text-gray-500 font-semibold">Deadline:</span>
              <span className="text-gray-800">{editedTask.deadline}</span>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center">
            <HiOutlineCheckCircle className="text-gray-500 mr-2" />
            <div>
              <span className="text-gray-500 font-semibold">Progress:</span>
              {isEditing ? (
                <input
                  type="number"
                  name="progress"
                  value={editedTask.progress}
                  onChange={handleProgressChange}
                  className="text-green-600 font-bold w-16 p-1 border border-gray-300 rounded"
                  min="0"
                  max="100"
                />
              ) : (
                <span className="text-green-600 font-bold">{editedTask.progress}%</span>
              )}
            </div>
          </div>

          {/* Priority */}
          <div className="flex items-center">
            <HiOutlineExclamationCircle className="text-gray-500 mr-2" />
            <div>
              <span className="text-gray-500 font-semibold">Priority:</span>
              <span className={`${getPriorityColor(editedTask.priority)} px-2 py-1 rounded-full font-semibold`}>
                {editedTask.priority}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-300 rounded-full mt-4 mb-6">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${editedTask.progress}%` }}
          ></div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none"
            >
              Edit Task
            </button>
          )}

          <button
            onClick={closePopup}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskPopup;
