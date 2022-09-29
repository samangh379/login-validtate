import React from "react";
import { Link } from "react-router-dom";
import styles from "./Information.module.css";

const Information = () => {
    return (
        <div className={styles.container}>
            <Link to="/information/table">simple table for products</Link>
            <Link to="/information/ag-grid">Ag-grid products</Link>
            <Link to="/information/ag-grid-filter">Ag-grid products with filter</Link>
        </div>
    );
};

export default Information;
