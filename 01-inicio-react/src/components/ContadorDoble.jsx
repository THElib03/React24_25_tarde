import { useState } from "react";

const ContadorDoble = () => {
    //State
    const [friends, setFriends] = useState({
        Juan: 0,
        Maria: 0,
        Carmen: 0
    });

    //Functions
    function handleClickLike(name){
        setFriends( (prevValue) => ({...prevValue, [name]: prevValue[name] + 1}));
    }

    function handleClickDislike(name){
        setFriends( (prevValue) => ({...prevValue, [name]: prevValue[name] - 1}));
    }

    //Return
    return(
        <div className=" max-w-md mx-auto mt-8 p-6 bg-gray-200 shadow-md rounded-md">
            <h1 className=" text-2xl font-bold mb-5 text-center"></h1>

            <div className="text-center">
                <span>
                    Juan tiene <strong>{friends.Juan}</strong> likes
                </span>

                <div className=" mt-4 flex justify-center gap-4">
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickLike("Juan")}>+</button>
                    <button className=" bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickDislike("Juan")}>-</button>
                </div>

                <span>
                    Maria tiene <strong>{friends.Juan}</strong> likes
                </span>

                <div className=" mt-4 flex justify-center gap-4">
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickLike("Maria")}>+</button>
                    <button className=" bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickDislike("Maria")}>-</button>
                </div>

                <span>
                    Carmen tiene <strong>{friends.Juan}</strong> likes
                </span>

                <div className=" mt-4 flex justify-center gap-4">
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickLike("Carmen")}>+</button>
                    <button className=" bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        onClick={() => handleClickDislike("Carmen")}>-</button>
                </div>
            </div>
        </div>
    );
};

//Crear tag con la media de likes de todos

export default ContadorDoble;
