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

export interface AuthContextType {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
