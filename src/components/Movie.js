import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, name, premiere, language, poster, overview, addRemoveFavorite }) => {
    //Prueba git
    return (
        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={poster} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{overview.substring(0, 250) + "..."}</p>
                        <p className="card-text">Language: {language}</p>
                        <p className="card-text"><small className="text-muted">Premiere: {premiere}</small></p>
                        <Link to={`/detalle?movieID=${id}`} className="btn btn-primary">Details</Link>
                        <button onClick={() => addRemoveFavorite(id)}>🤍</button>
                        <button>🧡</button>
                        {/* <h4>Id: {id}</h4> */}
                        {/* <Link to={`/detalle1`} className="btn btn-primary">Details</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Movie;