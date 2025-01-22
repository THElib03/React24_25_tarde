import { RouterProvider } from "react-router-dom";
import { router } from "../routes/Router";

function App() {
    //When using React Router, App should only have the RouterProvider
    //Any other elements shall be placed in RootLayout
    return(
        <RouterProvider router={router} />
    );
}

export default App;
