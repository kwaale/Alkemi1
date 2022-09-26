// import React from 'react';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
    const [keyword, serKeyword] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value;
        console.log(keyword)
        navigate(`/results?keyword=${keyword}`)
        e.currentTarget.keyword.value =  ''
    }
    
    const handlerChange = (e) => {
        serKeyword(e.target.value)
        // console.log(keyword)
    }

    return (
        <form className="row g-3" onSubmit={submitHandler}>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Buscar</button>
            </div>
            <div className="col-auto">
                <input 
                value={keyword}
                onChange={handlerChange}
                name="keyword" 
                className="form-control" 
                id="inputPassword2" 
                placeholder="Movie..."/>
            </div>
        </form>
    )
}
export default Buscador;