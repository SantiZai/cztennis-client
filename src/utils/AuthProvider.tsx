import { ReactNode, createContext, useState } from "react";
import { AuthContextType } from "./interfaces";

interface Props {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    loggedIn: false,
    setLoggedIn: () => {},
});

const AuthProvider = (props: Props) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(Boolean(localStorage.getItem("user")));

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
