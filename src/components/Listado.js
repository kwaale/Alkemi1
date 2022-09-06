import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Listado = () => {
    const token = localStorage.getItem('token');

    const navigate = useNavigate();
    console.log('Componente Listado token', token)
    useEffect(()=>{
        if(token === null) return navigate('/');
    },[])

    return(
        <h2>Listado componente</h2>
    )
}
export default Listado;