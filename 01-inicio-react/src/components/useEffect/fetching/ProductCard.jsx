import CardButton from "./CardButton";

const ProductCard = (args) => {
    //Variables:
    const { prod, addToCart } = args;

    //Functions:
    const handleClick = () => {
        addToCart(prod);
    }

    return <div key={prod.id} className=" bg-white shadow-lg rounded-lg p-6 flex-col justify-between">
        <h2 className=" text-xl font-bold mb-2">{prod.title}</h2>
        <p className=" text-gray-700 mb-4">{prod.price}</p>
        <img src={prod.image} alt="" />

        <CardButton onClick={handleClick} css='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition'>
            Añadir al carro
        </CardButton>
    </div>;
};

export default ProductCard;
