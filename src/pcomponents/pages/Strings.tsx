import { useEffect, useState } from "react";
import { bringStrings } from "../../utils/services";
import { Product } from "../../utils/interfaces";
import { Link } from "react-router-dom";

const Strings = () => {
    const [strings, setStrings] = useState<Product[]>([]);

    useEffect(() => {
        bringStrings().then((res) => setStrings(res));
    }, [strings]);

    return (
        <div className="w-full h-3/4 flex flex-col px-4">
            <div>
                <h2 className="text-center text-2xl">Cuerdas disponibles</h2>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
                {strings.map((prod: Product) => {
                    return (
                        <div
                            key={prod.id}
                            className="w-2/3 flex flex-col items-center gap-2"
                        >
                            <h2 className="text-center text-lg">{prod.name}</h2>
                            <img
                                src={prod.image}
                                className="w-2/3"
                            />
                            <button>
                                <Link to={prod.id.toString()}>View</Link>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Strings;
