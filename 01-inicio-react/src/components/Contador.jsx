import { useState } from "react";

const Contador = () => {
    //Hooks
    const [counter, setCounter] = useState(0)

    //Variables
    // let counter = 1;

    //Functions
    const handleClick = (action) => {
        if(action > 0){
            setCounter(counter + action);
        }
        else if(action < 0 && counter > 0){
            setCounter(counter + action);
        }
        
    };

    //Return
    return (
        <>
            <div className="max-w-sm mx-auto mt-8 p-6 bg-gray-200 shadow-sm rounded-md">
                <h1 className=" text-3xl font-bold mb-5 text-center">Ejemplo contador</h1>
                <p className=" text-2xl text-center text-blue-500 font-semibold">{counter}</p>

                <div className="flex justify-center mt-5 gap-4">
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={ () => handleClick(1) }>Add Counter</button><br />
                    <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py2 px-4 rounded" onClick={ () => handleClick(-1) } >Substract Counter</button>
                </div>
            </div>
        </>
    );
};

export default Contador;
