import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
    const { tasks, deleteTask, toggleTaskCompletion} = useContext(TaskContext);


    return (
        <div className=" p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className=" text-xl font-bold mb-4">Your Tasks</h2>
            <ul className=" list-none">
                {
                    tasks.map((task) =>{
                        <li key={task.id} className=" flex justify-between items-center p-2 mb-2 bg-white rounded-lg shadow-md">
                            <span className={` flex-1 ${task.completed ? "line-through text-gray-400" : " text-black"}`}>{task.title}</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default TaskList;
