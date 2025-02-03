import createBrowserRouter from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: '',
                element: <ProtectedRoute>
        
                </ProtectedRoute>,
                children: [
                    {
                        index: true, element: <Dashboard/>
                    }
                ]
            },
        ]
    },
]);
