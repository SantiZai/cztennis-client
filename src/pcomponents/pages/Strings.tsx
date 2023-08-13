import { useEffect, useState } from "react";
//import { bringStrings } from "../../utils/services";
//import { Product } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import strs from "../../utils/strings.json";

export interface ProdVarian {
    id: number;
    name: string;
    brand: string;
    size: number[];
    image: string;
}

const Strings = () => {
    /**
     * Usar las funcionalidades para pedir los datos al back
     * Mostrar precio y calibre
     */
    const [strings, setStrings] = useState<ProdVarian[]>([] as ProdVarian[]);

    useEffect(() => {
        //bringStrings().then((res) => setStrings(res));
        setStrings(strs);
    }, []);

    return (
        <div className="w-full h-full flex">
            <div className="w-full flex flex-col px-4">
                <h2 className="text-center text-3xl font-bold my-5">
                    Cuerdas
                    <br />
                    disponibles
                </h2>
                <div className="w-full flex flex-col justify-center items-center gap-6">
                    {strings.map((prod: ProdVarian) => {
                        return (
                            <Card
                                key={prod.id}
                                className="w-2/3 flex flex-col items-center gap-4"
                            >
                                <CardHeader>
                                    <span className="text-center text-lg font-semibold">
                                        {prod.name}
                                    </span>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center">
                                    <img
                                        src={prod.image}
                                        className="w-2/3"
                                    />
                                    {/* <div className="w-2/3 flex justify-between font-semibold">
                                        <div>
                                            <span>$</span>
                                            <span className="text-xl">
                                                {prod.price}
                                            </span>
                                        </div>
                                        <span className="text-xl">
                                            {prod.size}
                                        </span>
                                    </div> */}
                                </CardContent>
                                <CardFooter>
                                    <div className="flex flex-col">
                                        <div className="flex justify-center gap-2 mb-2">
                                            {prod.size.map((size, i) => {
                                                return <span key={i} className="font-semibold">{size}</span>;
                                            })}
                                        </div>
                                        <Button>
                                            <Link to={prod.id.toString()}>
                                                Ver más
                                            </Link>
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Strings;
