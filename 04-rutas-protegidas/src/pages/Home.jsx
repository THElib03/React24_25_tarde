import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate();
    const isAuth = localStorage.getItem('token');

    const handleLogin = () => {
        localStorage.setItem("token", JSON.stringify(""));
        nav('/dashboard');
    };
    
    return(
        <div className=" text-center">
            <h1 className=" text-3xl font-bold mb-8">Welcome!</h1>
            { isAuth ? (
                <button onClick={handleLogin} className=" bg-red-500 px-4 py-2 rounded hover:bg-red-800 hover:shadow-2xl text-white">Logout</button>
            ) : (
                <button onClick={handleLogin} className=" bg-blue-500 px-4 py-2 rounded hover:bg-blue-800 hover:shadow-2xl text-white">Log in</button>
            )}
        </div>
    );
};

export default Home;
