import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        setLoading(true);

        try{
            const pokeResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
            if(!pokeResponse.ok){
                throw new Error("Failed to fetch Pokemons");
            }

            const pokeData = await pokeResponse.json();
            const pokeDetails = await Promise.all(
                pokeData.results.map( async (pokemon) => {
                    const pResponse = await fetch(pokemon.url);
                    return await pResponse.json();
                })
            );

            setPokemons(pokeDetails);
        }
        catch (err) {
            console.error(err);   
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <div className=" container mx-auto p-4">
            <h1 className=" text-3xl font-bold mb-6">Available Pokemons</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">{
                pokemons.map( (pokemon) => (
                    <div key={pokemon.id} className=" bg-white rounded-lg p-6 hover:shadow-sm">
                        <div className=" relative group">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <h4 className=" text-center text-xl">{pokemon.name}</h4>

                            <div className=" flex justify-center space-x-2 mt-4">
                                <button className=" bg-red-700 text-white px-4 py2 rounded">Add to favorites</button>
                                <Link to={`${ROUTES.SEARCH}/${pokemon.name}`} className=" bg-green-700 text-white px-4 py2 rounded">Details</Link>
                            </div>
                        </div>
                    </div>
                ))
            }</div>
        </div>
    );
};

export { Home };
