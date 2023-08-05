import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../utils/interfaces";
import { bringString } from "../../utils/services";
import { Button } from "@/components/ui/button";

const SingleString = () => {
    const [prod, setProd] = useState<Product>({
        id: 0,
        name: "",
        brand: "",
        image: "",
        price: 0,
        size: 0,
        stock: 0,
    });

    const { id } = useParams();

    useEffect(() => {
        bringString(Number(id)).then((res) => setProd(res));
    }, [prod]);

    //TODO: crear fondo de pelota de tenis en alguna esquina de la pantalla, debe ser distinto segun el tema
    return (
        <div className="w-full h-full flex flex-col justify-center px-6 gap-2">
            <div className="flex flex-col">
                <span className="text-3xl font-bold">{prod.name}</span>
                <span className="text-xl font-semibold">{prod.brand}</span>
            </div>
            <img src={prod.image} />
            <div className="w-full flex justify-between">
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
                <Button>Agregar al carrito</Button>
            </div>
        </div>
    );
};

export default SingleString;
