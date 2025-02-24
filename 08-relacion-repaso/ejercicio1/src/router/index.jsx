import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Product from '../pages/Product';
import Register from '../pages/Register';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'login',
                index: true,
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'product',
                element: <Product/>
            },
            {
                path: 'product/create',
                element: (
                    <ProtectedRoute>
                        <Product action='create'/>
                    </ProtectedRoute>
                )
            },
            {
                path: 'product/:id',
                element: <ProductDetail/>
            },
            {
                path: 'product/:id/edit',
                element: (
                    <ProtectedRoute>
                        <Product action='edit'/>
                    </ProtectedRoute>
                )
            },
            {
                path: 'product/:id/delete',
                element: (
                    <ProtectedRoute>
                        <Product action='delete'/>
                    </ProtectedRoute>
                )
            },
        ]
    }
]);
