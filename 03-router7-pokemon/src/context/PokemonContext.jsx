/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import { toast } from "sonner";

export const PokemonContext = createContext();

export function PokemonProvider({children}){
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (pokemon) => {
        if(favorites.some( (poke) => {poke.id === pokemon.id})){
            toast.error("This pokemon is already one of your favorites!", {style:{background: "#fe2e2e", color: "white", border: "2px solid red"}});
            return false;
        }

        setFavorites((preFavoritos)=>[...preFavoritos, pokemon]);
        toast.success(`Successfully added ${pokemon.name} to favorites!`, {style:{background: "#fe2e2e", color: "white", border: "2px solid rebeccapurple"}});
    }

    const removeFromFavorites = (pokemonId) => {
        if(favorites.some( (poke) => {poke.id === pokemonId})){
            setFavorites( (preFavoritos) => preFavoritos.filter( (poke) => poke?.id !== pokemonId));
            toast.success("This pokemon has been removed from your favorites", {style:{background: "#2ecc71", color: "white", border: "2px solid rebeccapurple"}});
            return true;
        }

        toast.error("This pokemon is not in your favorites!", {style:{background: "#fe2e2e", color: "white", border: "2px solid red"}});
        return false;
    }

    return (
        <PokemonContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </PokemonContext.Provider>
    );
};