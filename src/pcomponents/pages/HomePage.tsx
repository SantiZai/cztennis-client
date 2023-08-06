import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "../../app.css";

const HomePage = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`container-home w-full h-full ${
                theme === "dark" ? "home-dark" : "home-light"
            }`}
        >
            <div className="w-full h-full flex flex-col justify-end">
                <div className="w-full h-1/2 flex flex-col justify-center items-center">
                    <Button>
                        <Link to="strings">Ver cordajes</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
