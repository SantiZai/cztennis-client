import { useState } from "react";
import { Link } from "react-router-dom";
import '../../navbar.css'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full flex flex-col justify-start text-center">
            <div className="btn-handle w-full flex justify-end py-4 px-5" onClick={handleOpen}>
                <div>X</div>
            </div>
            <ul
                className={`navigation w-full h-1/2 flex flex-col justify-center text-xl font-semibold ${
                    isOpen ? "open" : "close"
                }`}
            >
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="strings">Cuerdas</Link>
                </li>
                <li>
                    <Link to="profile">Perfil</Link>
                </li>
                <li>
                    <Link to="auth">Iniciar sesión</Link>
                </li>
            </ul>
            <div className="py-10">
                <h2>CZ Tennis Strings</h2>
            </div>
        </div>
    );
};

export default NavBar;
