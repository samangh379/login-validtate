import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";

const Table = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const obj = {
            link: "https://dummyjson.com/auth/products",
            object: {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + window.localStorage.getItem("token"),
                },
            },
        };
        axios(obj.link, obj.object).then((response) => {
            const data = response.data;
            setProduct(data.products);
        });
    }, []);

    return (
        <div>
            <div style={{ textAlign: "center", width: "550px", margin: "50px auto", background: "white" }}>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
