import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const PokemonContext = createContext();

export function PokemonProvider({children}){
    const [favorites, setfavorites] = useState([])

    const addToFavorites = (pokemon) => {

    }

    const removeFromFavorites = (pokemonId) => {

    }

    return (
        <PokemonContext.Provider value={{}}>
            {children}
        </PokemonContext.Provider>
    );
}

export const usePokemon = () => {
    const context = useContext(PokemonContext);

    if(context === undefined){
        throw new Error('required Context has not been initialized');
    }
}