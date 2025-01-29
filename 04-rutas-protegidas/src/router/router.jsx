import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout";

const ProtedtedRoute = () => {};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                ),
            },
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                ),
            },
            {
                index: true,
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

