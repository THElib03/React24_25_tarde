import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import MovieList from '../pages/MovieList';
import MovieDetail from '../pages/MovieDetail';
import Search from '../pages/Search';
import Review from '../pages/Review';
import Favorites from '../pages/Favorites';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'movies',
                element: <MovieList/>,
            },
            {
                path: 'movie/:id',
                element: <MovieDetail/>,
            },
            {
                path: 'search',
                element: <Search/>,
            },
            {
                path: 'reviews',
                element: <Review/>,
            },
            {
                path: 'favorites',
                element: <Favorites/>,
            },
        ]
    }
]);