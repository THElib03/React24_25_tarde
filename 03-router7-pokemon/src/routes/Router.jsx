import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { ROUTES } from "./paths";
import { Home, Search, Favorite, PokemonDetail } from "../pages/";

export const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home/>
            },
            {
                path: ROUTES.SEARCH,
                element: <Search />
            },
            {
                path: ROUTES.FAVORITES,
                element: <Favorite/>
            },
            {
                path: ROUTES.HOME,
                element: <PokemonDetail/>
            }
        ]
    }
]);