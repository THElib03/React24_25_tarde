import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Search = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (evn) => {
        evn.preventDefault();
        setLoading(true);

        try{
            const searchResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
            console.log(searchResponse);

            // navigate(`/search/${search.toLowerCase()}`);
        }
        catch(err){
            toast.error("Failed to search for " + search, {style: {background: "#fee2e2", color: "white", border: "2px solid red"}});
            console.error(err);
        }
        finally{
            setLoading(false);
            setSearch("");
        }
    };

    return(
        <div>
            <h1 className=" text-3xl font-bold mb-6">Search for Pokemons</h1>

            <form onSubmit={handleSubmit} className=" max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
                <div className=" flex gap-2">
                    <input type="text" value={search} placeholder="Search by name" onChange={ (e) => setSearch(e.target.value)} className=" flex-1 px-4 py-2 border border-gray-200 rounded focus:border-rose-500"/>
                    <button>Search</button>
                </div>
            </form>
        </div>
    );
};

export { Search };