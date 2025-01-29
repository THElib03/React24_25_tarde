import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { PokemonProvider } from "./context/PokemonContext";

const App = () => {
    //When using React Router, App should only have the RouterProvider
    //Any other elements shall be placed in RootLayout
    return(
        <PokemonProvider>
            <RouterProvider router={router} />
        </PokemonProvider>
    );
}

export default App;
