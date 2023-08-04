import { useState } from "react";
import Navigation from "../pures/Navigation";
import "../../navbar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full flex flex-col justify-start text-center">
            <div className="w-full flex justify-end">
                <div
                    className="btn-handle bg-red-200 flex justify-end my-2 mx-3 p-2"
                    onClick={handleOpen}
                >
                    <h2>X</h2>
                </div>
            </div>
            <Navigation
                isOpen={isOpen}
                handleNav={handleOpen}
            />
        </div>
    );
};

export default NavBar;
