import React, { useState } from "react";
import tasks from "./data/data.js";
import TaskPopup from "./taskpopup.jsx";
import { CheckCircleIcon, CalendarIcon } from "@heroicons/react/24/solid";

const ToDoCard = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const openTaskPopup = (task) => {
    setSelectedTask(task);
  };

  const closePopup = () => {
    setSelectedTask(null);
  };

  const todos = tasks.filter((task) => task.status === "To Do");
  const len = todos.length;

  return (
    <>
    <div className=" grid mx-auto bg-gray-100 rounded-lg shadow-lg">
    <h1 className=" text-3xl font-bold underline mb-1 sm:flex justify-center "> ToDo</h1>
      <div className="sm:grid sm:grid-cols-2 gap-4 p-4 ">
    {todos.map((todo) => (
      <div key={todo.id}
       className="sm:flex sm:flex-col bg-white p-4 rounded-lg shadow-md m-5"
       onClick={() => openTaskPopup(todo)}
       >
       
        <h3 className="text-xl font-semibold mb-1">{todo.title}</h3>
        <p className="text-gray-600 mb-2">{todo.description}</p>
        <p className="text-gray-500 text-sm mb-4">Deadline: {todo.deadline}</p>
        
        {/* Progress Heading and Bar */}
        <p className="text-sm font-medium mb-1">Progress:</p>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-4 relative">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${todo.progress}%` }}
            ></div>
            <span className="absolute right-2 top-0 text-sm font-medium text-gray-800">
              {todo.progress}%
            </span>
          </div>
        </div>

        <p className="text-sm font-medium">Priority: {todo.priority}</p>
      </div>
    ))}
  </div>
  </div>
  {selectedTask && <TaskPopup task={selectedTask} closePopup={closePopup} />}

    </>
  );
};

export default ToDoCard;
