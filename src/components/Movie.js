const Movie = ({name, premiere, language, poster, overview}) => {
    return (
        <div className="card mb-3" style={{"max-width" : "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={poster} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{overview}</p>
                        <p className="card-text">Language: {language}</p>
                        <p className="card-text"><small className="text-muted">Premiere: {premiere}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Movie;