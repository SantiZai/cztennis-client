import { useState, createContext, ReactNode } from "react";
import { CartContextType, Product } from "./interfaces";

interface Props {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: () => {},
});

const CartProvider = (props: Props) => {
    const [cart, setCart] = useState<Product[]>([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
