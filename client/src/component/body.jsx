import TaskSlider from "./slider";
import AddTaskCard from "./addtask";
import TaskCardList from "./taskcard";

const Body = () =>{

    return(
        <>
         <div className=" grid sm:grid-cols-12   h-screen bg-gray-200">
       <div className="col-span-4   m-10">
       <TaskCardList />
       <AddTaskCard />
       </div>
       <div className=" col-span-8   w-full mt-5">
      <TaskSlider/>a

       </div>
     </div>
        </>
    )
}

export default Body;