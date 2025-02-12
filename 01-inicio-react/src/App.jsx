import Saludo from "./components/useEffect/Saludo";
import ProductList from "./components/useEffect/fetching/ProductList";

const App = () => {
    // const [data, setData] = useState({name: 'Martín', age: 24});

    return (
        <>
            <div className=" min-h-screen bg-gray-100 p-8">
                <h1 className=" text-3xl font-bold text-center mb-8">
                    Componentes y states en React
                </h1>

                <div className=" mb-8">
                    <h2 className=" text-2xl font-semibold mb-4 text-center">
                        UseEffect                        
                    </h2>
                    <Saludo></Saludo>
                </div>

                <div className=" mb-8">
                    <h2 className=" text-2xl font-semibold mb-4 text-center">
                        Fetch loaded with useEffect
                    </h2>
                    <ProductList/>
                </div>
            </div>
        </>
    );
};

export default App;
