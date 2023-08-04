import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import AuthPage from "./components/pages/AuthPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import NavBar from "./components/containers/NavBar";
import Strings from "./components/pages/Strings";
import SingleString from "./components/pages/SingleString";

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
