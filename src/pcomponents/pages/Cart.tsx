import { CartContext } from "@/utils/CartProvider";
import { Product } from "@/utils/interfaces";
import { useContext } from "react";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    
    return (
        <div>
            {cart.map((prod: Product) => {
                return (
                    <div key={prod.id}>
                        <h2>{prod.name}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
