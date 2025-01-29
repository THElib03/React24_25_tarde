import { useLoaderData, useNavigate } from "react-router-dom";

const PokemonDetail = () => {
    // Load the Pokemon through the React Router fetch declared in Router.jsx
    const pokemon = useLoaderData();
    const navigate = useNavigate();

    return ( <div className=" container mx-auto p-4">
        <div className=" max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <button onClick={ () => navigate(-1)} className=" mb-4 text-blue-400 hover:text-blue-800">Return</button>

            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            <h1 className=" text-3xl font-bold text-center mt-4 capitalize">{pokemon.name}</h1>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <h2 className=" text-xl font-semibold mb-2">Pokemon Stats</h2>
                {pokemon.stats.map( (stat) =>{
                    return (
                        <div key={stat.stat.name}>
                            <p className="text-sm font-semibold capitalize">{stat.stat.name}: {stat.base_stat}</p>
                        </div>
                    );
                })}

                <div>
                    <h2 className=" text-xl font-semibold mb-2">Pokemon Types</h2>

                    <div className="flex gap-2">
                        {pokemon.types.map( (type) => (
                            <span key={type.type.name} className={'text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-sm capitalize'}>{type.type.name}</span>
                        ))}
                    </div>
                </div>
            </div>
            
            <div>
                <button onClick={ () => console.log("Add to favorites")} className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-slate-900">Add to Favorites</button>
            </div>
        </div>
    </div> );
};

export { PokemonDetail };
