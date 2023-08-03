import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import AuthPage from "./components/pages/AuthPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import NavBar from "./components/containers/NavBar";
import "./app.css";

export interface Order {
    user_id: number;
    strung_id: number;
}

const App = () => {
    return (
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
                        path="auth"
                        element={<AuthPage />}
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
    );
};

export default App;
