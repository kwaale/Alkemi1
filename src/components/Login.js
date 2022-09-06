import { useState } from "react";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        emailValido:true
    });
    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = state;
        if(email === "" || password === ""){
            
        }
        console.log("Submit");
        console.log("email", email);
        console.log("password", password);

    }
    const validaMail = (name, value) =>{
        const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        console.log('Valida Name', regexEmail.test(value))
        return regexEmail.test(value)
    }
    //https://academy.alkemy.org/curso/react-v3

    const handlerChange = (e) => {
        
        
        const { name, value } = e.target
        validaMail(name, value);
        setState({
            ...state,
            [name]: value,
            emailValido:validaMail(name, value)
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
                {state.emailValido ? null : <div><sapan>Email invalido</sapan><br /></div>}
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