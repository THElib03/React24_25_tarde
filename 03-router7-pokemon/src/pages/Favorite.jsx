import { Link } from "react-router-dom";
import  { usePokemon } from "../context/PokemonExport";
import { ROUTES } from "../routes/paths";

const Favorite = () => {
    const { favorites, addToFavorites, removeFromFavorites } = usePokemon();

    /* return (
        <div className=" container mx-auto p-4">
            <h1 className=" text-3xl font-bold mb-6">Your Favorites</h1>
            <p>You don(&apos)t have any favorite pokemons yet!</p>

            <Link to={ROUTES.HOME} className=" text-blue-500 hover:underline block mt-4">Go back</Link>
        </div>
    ); */

    return (
        <div className=" container mx-auto p-4">
            <h1 className=" text-3xl font-bold mb-6">Your Favorites</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { favorites.map( (pokemon) => (
                    <div key={pokemon.id} className=" bg-white rounded-xl p-6 shadow-sm hover:shadow-lg">
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className=" w-16 h16 mx-auto"/>

                        <h2 className=" text-xl capitalize font-semibold text-center mt-4"></h2>

                        <div className=" mt-4 space-y-2">
                            <Link to={`${ROUTES.SEARCH}/${pokemon.name}`} className=" block w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-slate-700">Details</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export { Favorite };
