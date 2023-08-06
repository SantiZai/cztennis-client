export interface Product {
    id: number;
    name: string;
    brand: string;
    image: string;
    size: number;
    price: number;
    stock: number;
}

export interface CartContextType {
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}