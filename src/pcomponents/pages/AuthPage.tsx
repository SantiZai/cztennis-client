import { useState } from "react";
import { Button } from "@/components/ui/button";
import Auth from "../pures/Auth";

const AuthPage = () => {
    const [signup, setSignup] = useState<boolean>(false);

    const handleSignup = () => setSignup(!signup);

    return <div>
        <Auth signup={signup} />
        <Button onClick={handleSignup}>{signup ? "Acceder" : "Registrarse"}</Button>
    </div>;
};

export default AuthPage;
