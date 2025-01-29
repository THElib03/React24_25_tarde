/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const PokemonContext = createContext();

export function PokemonProvider({children}){
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (pokemon) => {
        if(favorites.some( (poke) => {poke.id === pokemon.id})){
            return false;
        }

        setFavorites((preFavoritos)=>[...preFavoritos, pokemon]);
    }

    const removeFromFavorites = (pokemonId) => {
        if(favorites.some( (poke) => {poke.id === pokemonId})){
            setFavorites( (preFavoritos) => preFavoritos.filter( (poke) => poke.id!== pokemonId));
            return true;
        }
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