import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
    const { tasks, deleteTask, toggleTaskCompletion} = useContext(TaskContext);

    return (
        <div className=" p-4 bg-gray-200 rounded-lg shadow-md">
            <h2 className=" text-xl font-bold mb-4 text-gray-600">Your Tasks</h2>
            <ul className=" list-none">
                {
                    tasks.map((task) => (
                        <li key={task.id} className=" flex justify-between items-center p-2 mb-2 bg-white rounded-lg shadow-md">
                            <span className={` flex-1 ${task.completed ? "line-through text-gray-400" : " text-blue-500"}`}>{task.title}</span>
                            {/* REMEMBER: call onClick with a callback '() => ' to allow parameters in the call */}
                            <button onClick={ () => toggleTaskCompletion(task.id)} className=" mx-3 py-3 bg-blue-700 text-white rounded mr-2 hover:bg-slate-800">{task.completed ? 'Not Done' : 'Done'}</button>
                            <button onClick={ () => deleteTask(task.id)} className=" mx-3 py-3 bg-red-700 text-white rounded mr-2 hover:bg-slate-800">Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TaskList;
