const CartProduct = (args) => {
    const {product, index} = args;

    return <li key={index} className=" bg-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <span className=" text-xl bg-yellow-500 font-medium">{product.title}</span>
        <span className=" text-2xl bg-green-800 font-medium">{product.price}</span>
    </li>;
};

export default CartProduct;
