import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import ReactLogo from "../assets/download.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const sendLoginRequest = async (req) => {
        req.preventDefault();
        await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username: email,
                password: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    navigate("/information");
                    alert("با موفقیت وارد شدید");
                    return response.json();
                } else return alert("اطلاعات وارد شده صحیح نیست");
            })
            .then((json) => window.localStorage.setItem("token", json.token));
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.loginPage}>
                    <div className={styles.leftContainer}>
                        <div className={styles.inputHolder}>
                            <div className={styles.registerInfo}>
                                <label htmlFor="username">نام کاربری</label>
                                <input
                                    type="email"
                                    id="username"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <label htmlFor="password">رمز ورود
                                    </label>
                                <input
                                    type="password"
                                    id="pass"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={sendLoginRequest}>ورود به حساب کاربری</button>
                            <span>فراموشی رمز ورود</span>
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <img src={ReactLogo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
