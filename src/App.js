import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Information from "./Components/Information";
import Table from "./Components/Table";
import AgGrid from "./Components/AgGrid";
import AgGridWithFilter from "./Components/AgGridWithFilter";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/information" element={<Information />} />
                <Route path="/information/table" element={<Table />} />
                <Route path="/information/ag-grid" element={<AgGrid />} />
                <Route path="/information/ag-grid-filter" element={<AgGridWithFilter />} />
            </Routes>
        </div>
    );
};

export default App;
