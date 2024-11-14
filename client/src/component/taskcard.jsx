import React from 'react';
import { HiOutlineExclamationCircle, HiOutlineCheckCircle, HiOutlineClipboardList } from 'react-icons/hi';

const TaskCard = ({ title, count, icon: Icon, color }) => {
  return (
    <div className={`flex items-center p-5 rounded-lg shadow-lg ${color} hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out w-full max-w-md`}>
      <Icon className="text-4xl mr-5" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-3xl font-bold">{count}</p>
      </div>
    </div>
  );
};

const TaskCardList = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <TaskCard 
        title="Expired Tasks" 
        count="5" 
        icon={HiOutlineExclamationCircle} 
        color="bg-red-100 text-red-600" 
      />
      <TaskCard 
        title="Active Tasks" 
        count="7" 
        icon={HiOutlineClipboardList} 
        color="bg-yellow-100 text-yellow-600" 
      />
      <TaskCard 
        title="Completed Tasks" 
        count="10" 
        icon={HiOutlineCheckCircle} 
        color="bg-green-100 text-green-600" 
      />
    </div>
  );
};

export default TaskCardList;
