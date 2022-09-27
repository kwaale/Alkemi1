import { Navigate } from "react-router-dom";
import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../redux/actions/moviesAction';

const MovieDetail = () => {
    const { movieDetail } = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
    const token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search)
    const id = query.get('movieID');

    useEffect(() => {
        dispatch(getMovieDetail(id));
    }, [dispatch,id]);

    return (
        <>
            {!movieDetail && <h1>Cargando</h1>}
            {!token ? (<Navigate replace to="/" />) :
                (movieDetail && <div className="card mb-3">
                    <img src={URL_IMAGE + movieDetail.poster_path} className="card-img-top" alt={movieDetail.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{movieDetail.original_title}</h5>
                        <p className="card-text">{movieDetail.overview}</p>
                        <p className="card-text"><small className="text-muted">{movieDetail.tagline}</small></p>
                    </div>
                </div>)}
        </>
    )
}
export default MovieDetail;