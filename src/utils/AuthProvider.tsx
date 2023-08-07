import { ReactNode, createContext, useEffect, useState } from "react";
import { AuthContextType, User } from "./interfaces";
import { bringUser } from "./services";

interface Props {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    loggedIn: false,
    setLoggedIn: () => {},
    user: {} as User,
    setUser: () => {},
});

const AuthProvider = (props: Props) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(
        Boolean(localStorage.getItem("user"))
    );
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        if (Boolean(localStorage.getItem("user"))) {
            bringUser(Number(localStorage.getItem("user"))).then((res) => {
                setUser(res);
                setLoggedIn(true);
            });
        } else {
            setUser({} as User);
            setLoggedIn(false);
        }
    }, [loggedIn]);

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
