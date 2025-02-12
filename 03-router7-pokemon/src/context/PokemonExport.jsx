import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

export function usePokemon(){
    const context = useContext(PokemonContext);

    if(context === undefined){
        throw new Error('required Context has not been initialized');
    }

    return context;
};