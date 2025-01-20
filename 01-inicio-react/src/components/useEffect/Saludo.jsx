import { useEffect, useState } from "react";

const Saludo = () => {
    // Variables:
    const [age, setAge] = useState(10);
    const [admin, setAdmin] = useState(true);

    // Hooks:
    useEffect(() => {
        console.log("Rendering on each component load");
    });

    useEffect(() =>{
        console.log('Rendering on first load');
    }, []);

    useEffect(() => {
        console.log('Rendering each time the given values are modified');
    }, [admin]);

    //Functions:
    const handleClickAge = () => {
        setAge((prevAge) => prevAge + 1);
    }

    const handleClickAdmin = () => {
        setAdmin((prevAdmin) => prevAdmin === true ? false : true);
    }

    //Render:
    return <>
        <p>Age: {age}</p>
        <p>Is an admin? {admin ? 'Yes' : 'No'}</p>
        <button onClick={handleClickAge}>Aumentar</button><br />
        <button onClick={handleClickAdmin}>Set admin status</button>
        <button></button>
        <button></button>
    </>;
};

export default Saludo;
