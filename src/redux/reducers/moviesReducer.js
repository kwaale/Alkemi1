export const actions = {
    GET_MOVIES : "GET_MOVIES",
    ADD_MOVIE_FAVORITE : "ADD_MOVIES_FAVORITE",
    REMOVE_MOVIE_FAVORITE : "ADD_MOVIES_FAVORITE",
};

const initialState = {
    // moviesFavorite: JSON.parse(localStorage.getItem('movies')) || [],
    movies: [],
    moviesFavorites:[],
    movie:{}
};

// console.log("moviesReducer ver");
const moviesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actions.GET_MOVIES:
            
            return {
                movie: action.payload
            }
        case actions.ADD_MOVIE_FAVORITE:
            return {
                movie: action.payload
            }
        case actions.REMOVE_MOVIE_FAVORITE:
            return {
                movie: action.payload
            }
        default:
            return state
            break;
    }
}
export default moviesReducer;