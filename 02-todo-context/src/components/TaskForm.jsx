import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        addTask({
            id: Date.now(),
            title: taskName,
            completed: false
        });

        setTaskName('');
        
    }

    return (
        <form onSubmit={handleSubmit} className=" p-4 bg-gray-200 rounded-lg shadow-md">
            <h2 className=" text-xl font-bold mb-4"></h2>
            <input type="text" value={taskName} onChange={ (event) => setTaskName(event.target.value) } placeholder="Write you new task here" className=" w-full p-2 mb-4 border border-gray-300 rounded-lg"/>
            <button type="submit" value="" className=" px-4 py-2 bg-blue-500 text-white rounded-lg">Add task</button>
        </form>
    );
}

export default TaskForm