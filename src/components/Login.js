import { useState } from "react";
import React from 'react';
import axios from 'axios';
// import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: "challenge@alkemy.org",
        password: "react"
    });
    const submitHandler = (e) => {
        const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        console.log('state', state)
        e.preventDefault();
        const { email, password } = state;
        if (email === "" || password === "") return alert("No pueden estar Vacios.");;
        if (!regexEmail.test(state.email)) return alert("No es un email.");
        if (!email === "challenge@alkemy.org" || !password === "react") return alert("Credenciales Invalidas.");

        // console.log("Submit");
        // console.log("email", email);
        // console.log("password", password);

        axios.post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                const { token } = res.data;
                sessionStorage.setItem('token', token)
                alert("Logueado");
                navigate("/listado");
            })
            .catch(res => alert("Credenciales Invalida."));

    }


    const handlerChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value,
        })
        // console.log("email", state.email)
        // console.log("password", state.password)
    }
    return (
        <form onSubmit={submitHandler}>
            <h2>Formulario Login</h2>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Correo Electronico</label>
                </div>
                <div className="col-auto">
                    <input type="email" name="email"
                        value={state.email}
                        onChange={handlerChange}
                        className="form-control" />
                </div>
                <div className="col-auto">
                </div>
                <div className="col-auto">
                    <label className="col-form-label">Password</label>
                </div>
                <div className="col-auto">
                    <input type="password" name="password"
                        value={state.password}
                        onChange={handlerChange}
                        className="form-control" />
                </div>
            </div>
            <input className="btn btn-primary mb-5" type="submit" value="Submit"></input>
        </form>
    )
}
export default Login;