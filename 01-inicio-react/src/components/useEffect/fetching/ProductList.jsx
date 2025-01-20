import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CartProduct from "./CartProduct";

const ProductList = () => {
    //Variables:
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    //Hooks:
    useEffect(() => {
        fetchProducts();
    }, []);

    //Functions:
    const addToCart = (newProd) => {
        setCart((prevCart) => [...prevCart, newProd]);
        console.log(cart);
    }

    const fetchProducts = async () => {
        try{
            const resBooks = await fetch('http://localhost:5173/src/data/db.json');
            if(!resBooks.ok){
                throw new Error('Error response from database');
            }

            setProducts(await resBooks.json());
        }
        catch(err){
            console.error('Error while fetching', err);
        }
    };

    return <div className=" w-full max-w-4xl mx-auto p-4">
        <h1 className=" text-xl font-semibold text-center mb-6">Available books</h1>

        <div className="prod-container grid grid-cols-4 gap-2">{
            products.length > 0 && products.map((prod) => (
                <ProductCard key={prod.id} prod = {prod} addToCart = {addToCart}/>
            ))
        }</div>

        <div className=" mt-10">
            <h2 className=" text-xl font-semibold text-center mb-6">Your cart</h2>

            {
                cart.length > 0 ? (
                    <ul>
                        {
                            cart.map((product, index) => (
                                <CartProduct key={index} product={product}/>
                            ))
                        }
                    </ul>
                ) 
                : (<p>Wow! So empty...</p>)
            }
        </div>
    </div>;
};

export default ProductList;
