import { useState } from "react";
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
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
        if (email === "" || password === "") return swAlert(<h2>No pueden estar Vacios</h2>);
        if (!regexEmail.test(state.email)) return swAlert(<h2>No es un email.</h2>);
        if (!email === "challenge@alkemy.org" || !password === "react") return swAlert(<h2>Credenciales Invalidas</h2>);

        // console.log("Submit");
        // console.log("email", email);
        // console.log("password", password);

        axios.post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('token', token)
                swAlert(<h2>Logueado</h2>)
                navigate("/listado")
            })
            .catch(res => swAlert(<h2>Credenciales Invalida</h2>))

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