import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const NavBar = () => {
    return <nav className=" bg-gradient-to-tr from-rose-500 to-pink-500">
        <div className=" container mx-auto flex justify-between items-center p-4">
            {/* 
            NavLink works as a router (like the one in Symfony) between links
            Comes with React Router v7 and adds the class 'active' to the className of the rendered route 
            */}
            <NavLink to={ROUTES.HOME} className={( {isActive}) => `text-white text-2xl hover:text-red-600 ${isActive} ? "font-bold" : "" `}>Home</NavLink>
            <NavLink to={ROUTES.SEARCH} className=" text-white text-2xl font-bold">Search</NavLink>
            <NavLink to={ROUTES.FAVORITES} className=" text-white text-2xl font-bold">Favorites</NavLink>
        </div>
    </nav>;
};

export default NavBar;
