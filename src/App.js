import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default App;
