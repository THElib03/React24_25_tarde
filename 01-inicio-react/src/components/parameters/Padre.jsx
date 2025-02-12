const Padre = (args) => {
    const { data, children, setData } = args;

    const handleClick = () => {
        setData({...data, name:'Alfredo'});
    };

    const handleClickAge = () => {
        setData((prevData) => ({...data, age: prevData.age + 1}));
    }

    return <div className="max-w-sm mx-auto mt-8 p-6 bg-gray-200 shadow-sm rounded-md">
        El componente Padre contiene los argumentos nombre={data.name} y edad={data.age}
        {data.age < 18 ? (<p>Menor de edad</p>) : (<p>Mayor de edad</p>)}

        <div className="mt-5">
            <button className=" float-right" onClick={handleClick}>Modificar</button>
            <button className=" float-left" onClick={handleClickAge}>Modificar edad</button>
        </div>

        <div className="mt-16">
            {children}
        </div>
    </div>;
};

// 

export default Padre;
