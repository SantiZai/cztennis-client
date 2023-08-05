import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pcomponents/pages/HomePage";
import ProfilePage from "./pcomponents/pages/ProfilePage";
import AuthPage from "./pcomponents/pages/AuthPage";
import NotFoundPage from "./pcomponents/pages/NotFoundPage";
import NavBar from "./pcomponents/containers/NavBar";
import Strings from "./pcomponents/pages/Strings";
import SingleString from "./pcomponents/pages/SingleString";
import { ThemeProvider } from "@/components/theme-provider";
import Cart from "./pcomponents/pages/Cart";

const App = () => {
    return (
        <ThemeProvider
            defaultTheme="dark"
            storageKey="vite-ui-theme"
        >
            <BrowserRouter>
                <div className="container-all flex flex-col w-screen h-screen">
                    <NavBar />
                    <Routes>
                        <Route
                            path="/"
                            element={<HomePage />}
                        />
                        <Route
                            path="profile"
                            element={<ProfilePage />}
                        />
                        <Route
                            path="strings"
                            element={<Strings />}
                        />
                        <Route
                            path="strings/:id"
                            element={<SingleString />}
                        />
                        <Route
                            path="auth"
                            element={<AuthPage />}
                        />
                        <Route 
                            path="order"
                            element={<Cart />}
                        />
                        <Route
                            path="not-found"
                            element={<NotFoundPage />}
                        />
                        <Route
                            path="*"
                            element={<Navigate to="not-found" />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
