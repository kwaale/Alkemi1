import { useState } from "react";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = state;
        console.log("Submit");
        console.log("email", email);
        console.log("password", password);

    }
    const handlerChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
        // console.log("email", state.email)
        // console.log("password", state.password)
    }
    return (
        <form onSubmit={submitHandler}>
            <h2>Formulario Login</h2>
            <label>
                <span>Correo Electronico</span><br />
                <input type="email" name="email" onChange={handlerChange} /><br />
            </label>
            <label>
                <span>Password</span><br />
                <input type="password" name="password" onChange={handlerChange} /><br />
            </label>
            <button type="submit">Ingresar</button><br />
        </form>
    )
}
export default Login;