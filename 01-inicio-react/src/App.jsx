import { useState } from "react";
import Contador from "./components/Contador";
import Hijo from "./components/parameters/Hijo";
import Padre from "./components/parameters/Padre";

const App = () => {
    const [data, setData] = useState({name: 'Martín', age: 24});

    return (
        <>
            <div className=" min-h-screen bg-gray-100 p-8">
                <h1 className=" text-3xl font-bold text-center mb-8">
                    Componentes y states en React
                </h1>

                <div className=" mb-8">
                    <h2 className=" text-2xl font-semibold mb-4 text-center">
                        Contador Simple
                    </h2>
                    <Contador></Contador>
                </div>

                <div className=" mb-8">
                    <h2 className=" text-2xl font-semibold mb-4 text-center">
                        Componente Padre
                    </h2>
                    <Padre data = {data} setData = {setData}>
                        <Hijo data = {data} />
                    </Padre>
                </div>
            </div>
        </>
    );
};

export default App;
