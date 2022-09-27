import { Navigate } from "react-router-dom";
import React from 'react';
import { useEffect } from "react";
import Movie from "./Movie";
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/actions/moviesAction';

const Listado = () => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.moviesReducer);
    //https://api.themoviedb.org/3/discover/tv?api_key=9f3d130990d75b5f5409f458cb910a4b&language=en-ES&sort_by=popularity.desc&page=1
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const token = sessionStorage.getItem('token');

    return (
        <div>
            {!token ? (<Navigate replace to="/" />) : (movies?.map(({ id, name, first_air_date, original_language, poster_path, overview }) => {
                return (
                    <Movie
                        key={id}
                        name={name}
                        premiere={first_air_date}
                        language={original_language}
                        poster={URL_IMAGE + poster_path}
                        id={id}
                        overview={overview} />
                )
            }))
            }
        </div>
    )
}
export default Listado;