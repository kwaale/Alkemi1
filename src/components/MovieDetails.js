import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
    const API_KEY = '9f3d130990d75b5f5409f458cb910a4b';
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    const [state, setState] = useState({});
    const token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search)
    const id = query.get('movieID');
    //https://api.themoviedb.org/3/movie/63174?api_key=9f3d130990d75b5f5409f458cb910a4b&language=us-US
    //https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-ES`)
            .then(res => {
                setState(res.data)
            })
            .catch(error => console.error(error));
    }, [id]);

    return (
        <>
            {!state && <h1>Cargando</h1>}
            {!token ? (<Navigate replace to="/" />) :
                (state && <div className="card mb-3">
                    <h1>Id: {state.id}</h1>
                    <img src={URL_IMAGE + state.poster_path} className="card-img-top" alt={state.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{state.original_title}</h5>
                        <p className="card-text">{state.overview}</p>
                        <p className="card-text"><small className="text-muted">{state.tagline}</small></p>
                    </div>
                </div>)}
        </>
    )
}
export default MovieDetail;