import Auth from "../pures/Auth";
import { useTheme } from "@/components/theme-provider";
import "../../auth.css";

const AuthPage = () => {
    const { theme } = useTheme();
    return (
        <div
            className={`container-auth w-full h-full ${
                theme === "dark" ? "auth-dark" : "auth-light"
            }`}
        >
            <Auth />
        </div>
    );
};

export default AuthPage;
