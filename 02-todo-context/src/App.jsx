import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    return(
        <div className=" container mx-auto p-4">
            <h1 className=" text-center font-bold text-3xl text-blue-700 mb-8">Tasks App Manager</h1>
            <TaskForm></TaskForm>
            <TaskList></TaskList>
        </div>
        
    );
}

export default App;
