import React, { useState } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import { useEffect } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const AgGridWithFilter = () => {
    const [rowData, setRowData] = useState([]);
    useEffect(() => {
        const obj = {
            link: "https://dummyjson.com/auth/products",
            object: {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + window.localStorage.getItem("token"),
                },
            },
        };
        axios.get(obj.link, obj.object).then((responseData) => {
            const data = responseData.data;
            setRowData(data.products);
        });
    }, []);
    const columnDefs = [
        { field: "id", filter: true, floatingFilter: true },
        { field: "title", filter: true, floatingFilter: true, resizable: true, width: 420 },
        { field: "price", filter: true, floatingFilter: true },
    ];

    return (
        <div className="ag-theme-alpine" style={{ width: 850, height: 550, margin: "auto" }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
    );
};

export default AgGridWithFilter;
