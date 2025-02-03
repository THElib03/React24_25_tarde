/* eslint-disable react/prop-types */
import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Dashboard from  '../pages/Dashboard';
import RootLayout from "../layout/RootLayout";

const isAuthenticated = () => {
    return localStorage.getItem('toke') !== null;
}

const ProtectedRoute = ({ children }) => {
    // const navigate = useNavigate();

    if(!isAuthenticated()){
        return <Navigate to="/" replace={true} />;
    }

    return children;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: (
                    <Home/>
                ),
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                ),
            },
            {
                path: "dashboard",
                element: (
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {}
]);

export default router;