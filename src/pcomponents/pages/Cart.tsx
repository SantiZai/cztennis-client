import { CartContext } from "@/utils/CartProvider";
import { useContext } from "react";

const Cart = () => {
    const { cart } = useContext(CartContext);
    
    return (
        <div>
            
        </div>
    );
};

export default Cart;
