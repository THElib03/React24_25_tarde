import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { PokemonProvider } from "./context/PokemonContext";
import { Toaster } from "sonner";

const App = () => {
    //When using React Router, App should only have the RouterProvider
    //Any other elements shall be placed in RootLayout
    return(
        <PokemonProvider>
            <Toaster position="top-left" richColors duration="4" />
            <RouterProvider router={router} />
        </PokemonProvider>
    );
}

export default App;
