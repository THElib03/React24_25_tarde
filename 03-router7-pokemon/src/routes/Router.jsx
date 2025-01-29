import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { ROUTES } from "./paths";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Favorite } from "../pages/Favorite";
import { PokemonDetail } from "../pages/PokemonDetail";
import Error from "../pages/Error";
// import { Home, Search, Favorite, PokemonDetail } from "../pages/";

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
                path: ROUTES.POKEMON_DETAIL,
                element: <PokemonDetail/>,
                // This ia a parameter of react router that allows you to get/fetch/load data before rendering the page
                loader: async ({ params }) => {
                    try{
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                        
                        return await response.json();
                    }
                    catch(error){
                        throw new Error(`Failed to fetch data: ${error.message}`);
                    }
                },
                errorElement: <Error/>
            }
        ]
    },
    {},
]);