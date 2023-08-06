import { useEffect, useState } from "react";
import { bringStrings } from "../../utils/services";
import { Product } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

const Strings = () => {
    const [strings, setStrings] = useState<Product[]>([]);

    useEffect(() => {
        bringStrings().then((res) => setStrings(res));
    }, []);

    return (
        <div className="w-full h-full flex">
            <div className="flex flex-col px-4">
                <h2 className="text-center text-3xl font-bold my-5">
                    Cuerdas
                    <br />
                    disponibles
                </h2>
                <div className="w-full flex flex-col justify-center items-center gap-6">
                    {strings.map((prod: Product) => {
                        return (
                            <Card
                                key={prod.id}
                                className="w-2/3 flex flex-col items-center gap-4"
                            >
                                <CardHeader>
                                    <h2 className="text-center text-lg font-semibold">
                                        {prod.name}
                                    </h2>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center">
                                    <img
                                        src={prod.image}
                                        className="w-2/3"
                                    />
                                    <div className="w-2/3 flex justify-between font-semibold">
                                        <div>
                                            <span>$</span>
                                            <span className="text-xl">
                                                {prod.price}
                                            </span>
                                        </div>
                                        <span className="text-xl">
                                            {prod.size}
                                        </span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>
                                        <Link to={prod.id.toString()}>
                                            View
                                        </Link>
                                    </Button>
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
