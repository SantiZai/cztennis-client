import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { useContext } from "react";
import { AuthContext } from "@/utils/AuthProvider";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import "../../navbar.css";

interface Props {
    isOpen: boolean;
    handleNav: () => void;
}

const Navigation = ({ isOpen, handleNav }: Props) => {
    const { loggedIn, setLoggedIn, user } = useContext(AuthContext);

    const logOut = () => {
        handleNav();
        setLoggedIn(false);
        localStorage.removeItem("user");
    };

    return (
        <div
            className={`navigation w-full h-full flex flex-col gap-2 px-4 text-xl font-semibold ${
                isOpen ? "open" : "close"
            }`}
        >
            <div className="w-full flex pt-4">
                <ModeToggle />
            </div>
            <div className="w-full h-1/3 flex justify-between items-center">
                <h2>logo</h2>
            </div>
            <ul className="w-full h-1/3 flex flex-col items-start gap-3">
                <li onClick={handleNav}>
                    <Link to="/">Inicio</Link>
                </li>
                <li onClick={handleNav}>
                    <Link to="strings">Cuerdas</Link>
                </li>
                {loggedIn ? (
                    <li onClick={handleNav}>
                        <Link to="profile">Perfil</Link>
                    </li>
                ) : (
                    <li onClick={handleNav}>
                        <Link to="auth">Iniciar sesión</Link>
                    </li>
                )}
                <li onClick={handleNav}>
                    <Link to="order">Pedido</Link>
                </li>
            </ul>
            {loggedIn && (
                <div className="w-full flex flex-col items-start gap-4">
                    <div className="flex flex-col items-start gap-1">
                        <Avatar>
                            <AvatarImage src="https://i.pinimg.com/280x280_RS/52/da/85/52da850c6903a93646c6a3bc1dc2729a.jpg" />
                        </Avatar>
                        <span className="text-sm font-bold w-10">{user.fullName}</span>
                    </div>
                    {/* TODO: corregir que al hacer click cerca del boton se ejecuta el onClick (capaz creando un componente para el boton puede funcionar) */}
                    <div>
                        <Button
                            variant="link"
                            size="nothing"
                            spacing="topBottom"
                            onClick={logOut}
                        >
                            <Link to="auth">Cerrar sesión</Link>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;
