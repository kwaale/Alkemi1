export const actions = {
    GET_MOVIES : "GET_MOVIES",
    ADD_MOVIE_FAVORITE : "ADD_MOVIES_FAVORITE",
    REMOVE_MOVIE_FAVORITE : "ADD_MOVIES_FAVORITE",
    GET_MOVIE_DETAIL : "GET_MOVIE_DETAIL",
};

const initialState = {
    // moviesFavorite: JSON.parse(localStorage.getItem('movies')) || [],
    movies: [],
    moviesFavorites:[],
    movieDetail:{}
};

// console.log("moviesReducer ver");
const moviesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actions.GET_MOVIES:
            return {
                movies: action.payload
            }
        case actions.GET_MOVIE_DETAIL:
            return {
                movieDetail: action.payload
            }
        case actions.REMOVE_MOVIE_FAVORITE:
            //por el id busca la peli en la API y la agrega a favoritos
            return {
                moviesFavorites: action.payload.filter
            }
            case actions.ADD_MOVIE_FAVORITE:
            return {
                moviesFavorites: action.payload
            }
        default:
            return state
    }
}
export default moviesReducer;