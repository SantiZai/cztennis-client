import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../utils/interfaces";
import { bringString } from "../../utils/services";

const SingleString = () => {
    const [str, setStr] = useState<Product>({
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
        bringString(Number(id)).then((res) => setStr(res));
    }, [str]);

    return <div>{str.name}</div>;
};

export default SingleString;
