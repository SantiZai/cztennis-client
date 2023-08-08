import { Card, CardContent } from "@/components/ui/card";
import { AuthContext } from "@/utils/AuthProvider";
import { CartContext } from "@/utils/CartProvider";
import { Product, User } from "@/utils/interfaces";
import { bringProductsInCart, updateUser } from "@/utils/services";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
    const [prods, setProds] = useState<Product[]>([] as Product[]);

    const { cart, setCart } = useContext(CartContext);
    const { user, setUser } = useContext(AuthContext);

    const removeToCart = async (id: number) => {
        const updatedCart: string = cart
            .split(",")
            .filter((i) => Number(i) !== id)
            .join(",");
        setCart(updatedCart);
        setUser((prevUser: User) => ({
            ...prevUser,
            cart: updatedCart,
        }));
        await updateUser(user.id, { ...user, cart: updatedCart });
    };

    useEffect(() => {
        if (cart !== "") {
            bringProductsInCart(cart).then((res) => setProds(res));
        }
    }, [cart]);

    /**TODO:
     * Mostrar productos
     * Implementar lógica de pago
     * Crear la orden y gestionar su estado
     */
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-2">
            {prods.map((prod: Product) => {
                return (
                    <Card
                        key={prod.id}
                        className="w-3/4 mx-auto flex flex-col justify-end pt-1"
                    >
                        <CardContent className="flex items-center">
                            <div className="w-1/3 flex flex-col items-start justify-center">
                                <span className="text-md font-bold">
                                    {prod.name}
                                </span>
                                <span className="text-sm font-semibold">
                                    {prod.brand}
                                </span>
                            </div>
                            <div className="w-1/3 flex flex-col items-end justify-center">
                                <span>${prod.price}</span>
                                <div className="flex items-center">
                                    <span>{prod.size}</span>
                                    <span className="text-xs font-semibold">
                                        mm
                                    </span>
                                </div>
                            </div>
                            <div className="w-1/4 flex items-end justify-end">
                                <span onClick={() => removeToCart(prod.id)}>
                                    X
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default Cart;
