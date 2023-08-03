import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Order } from "../../App";
import axios from 'axios'

const Product = () => {
    const [prefId, setPrefId] = useState<string>("");

    const ord: Order[] = [
        //TODO: para prevenir este error de user_id distinto tengo que traerlo de un localstorage o un usestate
        {user_id: 9,
        strung_id: 3},
        {user_id: 8,
        strung_id: 1}
        ]

    const fe = async (orders: Order[]) => {
        await axios.post("https://localhost:7226/create-preference", orders).then(res => setPrefId(res.data.id))
    }

    initMercadoPago("TEST-7bb789b0-cd18-4410-9214-a60e0ff193d6");
    return (
        <div>
            <h2>Producto</h2>
            <h3>Descripcion</h3>
            <button onClick={() => fe(ord)}>Comprar touch multifibre</button>
            <div id="wallet_container">
                <Wallet initialization={{ preferenceId: prefId }} />
            </div>
        </div>
    )
}

export default Product