import { Link } from "react-router-dom";
import '../../navbar.css'

interface Props {
    isOpen: boolean;
    handleNav: () => void;
}

const Navigation = ({ isOpen, handleNav }: Props) => {
    return (
        <ul
            className={`navigation w-full h-full flex flex-col justify-center gap-2 text-xl font-semibold ${
                isOpen ? "open" : "close"
            }`}
        >
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
        </ul>
    );
};

export default Navigation;
