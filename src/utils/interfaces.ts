enum STATUS {
    Pendiente,
    Pagado,
    Cancelado,
}

export interface User {
    id: number;
    fullName: string;
    password: string;
    isAdmin: boolean;
    orders: Order[];
    cart: string;
}

export interface Order {
    id: number;
    user_id: number;
    strung_id: number;
    status: STATUS;
}

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
    cart: string;
    setCart: React.Dispatch<React.SetStateAction<string>>;
}

export interface AuthContextType {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}
