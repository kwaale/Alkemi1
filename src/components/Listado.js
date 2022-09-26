import { Navigate } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";


/*Ejemplo de solicitud de API
https://api.themoviedb.org/3/movie/550?api_key=9f3d130990d75b5f5409f458cb910a4b
/**
 * backdrop_path "/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg"
first_air_date "2022-08-21"
genre_ids (4) [18, 10759, 10765, 9648]
id 94997
name "House of the Dragon"
origin_country ['US']
original_language "en"
original_name "House of the Dragon"
overview "The prequel series finds the Targaryen dynasty at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires—real and imagined—crumble from such heights. In the case of the Targaryens, their slow fall begins almost 193 years before the events of Game of Thrones, when King Viserys Targaryen breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm."
popularity 8296.254
poster_path "/z2yahl2uefxDCl0nogcRBstwruJ.jpg"
vote_average 8.7
vote_count 900
id
estreno
name
language
poster
overview
 */

const Listado = () => {
    const API_KEY = '9f3d130990d75b5f5409f458cb910a4b';
    const URL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-ES&sort_by=popularity.desc&page=1`;
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
    const [state, setState] = useState([])
    //https://api.themoviedb.org/3/discover/tv?api_key=9f3d130990d75b5f5409f458cb910a4b&language=en-ES&sort_by=popularity.desc&page=1
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setState(res.data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [URL]);

    const token = sessionStorage.getItem('token');

    return (
        <div>
            {!token ? (<Navigate replace to="/" />) : (state?.map(({ id, name, first_air_date, original_language, poster_path, overview }) => {
                return (
                    <Movie
                        key={id}
                        name={name}
                        premiere={first_air_date}
                        language={original_language}
                        poster={URL_IMAGE + poster_path}
                        id={id}
                        overview={overview} />
                )}))
            }
        </div>
    )
}
export default Listado;