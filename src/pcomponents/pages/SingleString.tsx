import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import { Product } from "../../utils/interfaces";
//import { bringString, updateUser } from "../../utils/services";
import { Button } from "@/components/ui/button";
//import { CartContext } from "@/utils/CartProvider";
//import { AuthContext } from "@/utils/AuthProvider";
import { ProdVarian } from "./Strings";
import strs from "../../utils/strings.json";

const SingleString = () => {
    /**
     * Pedir por id la cuerda a la bbdd
     * Usar los estados necesarios para carrito, usuario y producto
     * Volver a usar la lógica de addToCart
     * Al renderizar los datos usar prod en lugar de prodd
     */
    const [prodd, setProdd] = useState<ProdVarian>({} as ProdVarian);
    /* const [prod, setProd] = useState<Product>({} as Product);
    const { cart, setCart } = useContext(CartContext);
    const { user, setUser } = useContext(AuthContext); */

    const { id } = useParams();

    /* const navigate = useNavigate();

    const addToCart = async (id: number) => {
        // Comprueba que haya un usuario para agregar productos al carrito, de lo contrario te hace iniciar sesión
        if (user.fullName) {
            let updatedCart = "";
            if (cart === "") updatedCart = id.toString();
            else updatedCart = cart + "," + id.toString();
            setCart(updatedCart);
            setUser((prevUser) => ({
                ...prevUser,
                cart: updatedCart,
            }));
            await updateUser(user.id, { ...user, cart: updatedCart });
        } else navigate("/auth");
    }; */

    useEffect(() => {
        //bringString(Number(id)).then((res) => setProd(res));
        const filtered = strs.find((str: ProdVarian) => str.id === Number(id))!;
        setProdd(filtered);
    }, [id]);

    /* useEffect(() => {
        //setCart(user.cart);
    }, [user.cart]); */

    //TODO: crear fondo de pelota de tenis en alguna esquina de la pantalla, debe ser distinto segun el tema
    return (
        <div className="w-full h-full flex flex-col justify-center px-6 gap-2">
            <div className="flex flex-col">
                <span className="text-3xl font-bold">{prodd.name}</span>
                <span className="text-xl font-semibold">{prodd.brand}</span>
            </div>
            <img src={prodd.image} />
            <div className="w-full text-center">
                <span className="text-xl font-semibold">
                    Próximamente más detalles
                </span>
                <Button>
                    <Link to="../strings">Volver atrás</Link>
                </Button>
            </div>
            {/* <div className="w-full flex justify-between">
                <div className="flex items-center">
                    <span className="text-xl">$</span>
                    <span className="text-2xl font-bold">{prod.price}</span>
                </div>
                <div>
                    <span className="text-lg font-semibold">Calibre: </span>
                    <span className="text-xl font-semibold">{prod.size}</span>
                </div>
            </div>
            <div className="mt-4">
                <Button onClick={() => addToCart(prod.id)}>
                    Agregar al carrito
                </Button>
            </div> */}
        </div>
    );
};

export default SingleString;
