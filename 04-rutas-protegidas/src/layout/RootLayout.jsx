import { Link, Outlet, useNavigate } from "react-router-dom";

const isAuth = localStorage.getItem('toke') !== null;

const RootLayout = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className=" bg-white shadow-lg">
                <div className=" max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className=" flex space-x-4">
                            <Link to="/" className=" text-xl font-bold">Home</Link>
                            <Link to="/" className=" text-xl font-bold">Profile</Link>
                            <Link to="/" className=" text-xl font-bold">Dashboard</Link>
                        </div>
                        {isAuth ? (
                            <button className=" bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600">Log off</button>
                        ): null};
                    </div>
                </div>
            </nav>

            <main onClick={handleLogout} className=" max-w-6xl mx-auto mt-8 px-4 py-8">
                <Outlet/>
            </main>
        </div>
    );
};

export default RootLayout;
