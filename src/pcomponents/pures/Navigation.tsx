import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import "../../navbar.css";

interface Props {
    isOpen: boolean;
    handleNav: () => void;
}

const Navigation = ({ isOpen, handleNav }: Props) => {
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
                <li onClick={handleNav}>
                    <Link to="profile">Perfil</Link>
                </li>
                <li onClick={handleNav}>
                    <Link to="auth">Iniciar sesión</Link>
                </li>
                <li onClick={handleNav}>
                    <Link to="order">Pedido</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
