import {
    useState,
    createContext,
    ReactNode,
    useContext,
    useEffect,
} from "react";
import { CartContextType } from "./interfaces";
import { AuthContext } from "./AuthProvider";

interface Props {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
    cart: "",
    setCart: () => {},
});

const CartProvider = (props: Props) => {
    const { user } = useContext(AuthContext);

    const [cart, setCart] = useState<string>(user.cart || "");

    useEffect(() => {
        if (user) {
            setCart(user.cart || "");
        }
    }, [user]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
