import { useState, createContext, ReactNode, useEffect } from "react";
import { CartContextType } from "./interfaces";
import { bringUser } from "./services";

interface Props {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
    cart: "",
    setCart: () => {},
});

const CartProvider = (props: Props) => {
    const [cart, setCart] = useState<string>("");

    useEffect(() => {
        if (localStorage.getItem("user")) {
            bringUser(Number(localStorage.getItem("user"))).then((res) =>
                setCart(res.cart)
            );
        }
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
