import { useState } from "react";
import Navigation from "../pures/Navigation";
import "../../navbar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full flex flex-col text-center">
            <div className="w-full flex justify-between">
                <input
                    id="checkbox"
                    type="checkbox"
                    onClick={handleOpen}
                />
                <label
                    className="toggle m-2"
                    htmlFor="checkbox"
                >
                    <div
                        id="bar1"
                        className="bars"
                    ></div>
                    <div
                        id="bar2"
                        className="bars"
                    ></div>
                    <div
                        id="bar3"
                        className="bars"
                    ></div>
                </label>
                {/* <div
                    className="handle-nav flex justify-end my-2 mx-3 p-4"
                    onClick={handleOpen}
                >
                    <h2>X</h2>
                </div> */}
            </div>
            <Navigation
                isOpen={isOpen}
                handleNav={handleOpen}
            />
        </div>
    );
};

export default NavBar;
