import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLayout = () => {
    const {logout} = useAuth();

    return (
        <div className="flex h-screen">
            <div className="lg:hidden">

            </div>
            <div>
                <aside className="fixed lg:static w-64 bg-gray-800 h-full hidden lg:block transform transition-transform flex flex-col">
                    <nav className=" flex-1 p-4 space-y-2">
                        <NavLink className="block p-2 text-white hover:text-amber-700">Products</NavLink>
                        <NavLink className="block p-2 text-white hover:text-amber-700">Products</NavLink>
                        <NavLink className="block p-2 text-white hover:text-amber-700">Products</NavLink>
                    </nav>

                    <button className=" w-full ">Logout</button>
                </aside>
            </div>

            <main className=" flex-1 ">

            </main>
        </div>
    );
};

export default AdminLayout;
