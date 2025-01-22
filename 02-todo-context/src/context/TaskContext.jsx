/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// Context
export const TaskContext = createContext();

// Context Provider
export const TaskProvider = ({ children }) => {
    //Hooks
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');

        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    })

    //Methods
    const addTask = (newTask) => {
        setTasks( (prevTasks) => [...prevTasks, newTask]);
    }

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter(t => t.id !== taskId));
    }

    const editTask = (taskId, newTask) => {
        // setTasks((prevTasks) => [...prevTasks, prevTasks[taskId] = task]);
        setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? newTask : task));
    }

    const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? {...task, completed: !task.completed} : task));
    }

    //Return
    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, toggleTaskCompletion }}>
            {children}
        </TaskContext.Provider>
    );
};