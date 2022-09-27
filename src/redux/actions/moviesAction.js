import { actions } from '../reducers/moviesReducer';
import axios from "axios";

const API_KEY = '9f3d130990d75b5f5409f458cb910a4b';
const URL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-ES&sort_by=popularity.desc&page=1`;

export const getMovies = () => {
    return (dispatch) => {
        return axios.get(URL)
            .then(res => {
                dispatch({
                    type: actions.GET_MOVIES,
                    payload: res.data.results
                })
            })
            .catch((error) => {
                console.error("getMovies", error)
            })
    }
}

export const addMovieFavorite = () => {}

export const getMovieDetail = (id) => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-ES`)
            .then(res => {
                dispatch({
                    type: actions.GET_MOVIE_DETAIL,
                    payload: res.data
                })
            })
            .catch((error) => {
                console.error("getMovieDetail", error)
            })
    }
}

export const removeMovieFavorite = (id) =>{

}