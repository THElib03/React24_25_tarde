import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";

const LiveSearchBar = () => {
    const { products } = useProducts();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {

    }, [results]);

    const handleSearch = async (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setIsLoading(true);
        setQuery(e.target.value);

        setResults(products.filter( (prod) => prod.name.toLowerCase().includes(query)));
    }

    return <div className="container mx-auto p-4">
        <form onSubmit={ handleSearch } className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
            <div className="flex gap-2">
                <input type="text" onChange={handleChange} value={query} placeholder="Search any product name"   className="flex-1 p-2  border-gray-200 border rounded-lg  focus:outline-rose-500"/>
                <button type="submit" className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-slate-900">Search</button>
            </div>
        </form>

        <div>
            {
                results.lenght > 0 ? results.map((res) => (
                    <div key={res._id}>
                        <h3>{res.name}</h3>
                        <p>{res.description}</p>
                    </div>
                )) : (<></>)
            }
        </div>
    </div>;
};

export default LiveSearchBar;
