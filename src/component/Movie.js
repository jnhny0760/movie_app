import React from "react"
import {Link} from "react-router-dom"
import propTypes from 'prop-types'
import './Movie.css';

function Movie({id, title, year, summary, poster, genres}){
    return(
        <div className='movie'>
        <Link to={{pathname:'/movie_detail',
        state: {year,title,summary,poster,genres},
        }}>
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
            <h3 className="movie_title" style={{backgroundColor:'#eee'}}>영화제목: {title}</h3>
            <h4 className="movie_year">{year}</h4>
            <ul className="movie_genres">
                {genres.map( (genre,index) => {
                    return  (
                        <li key={index} className="movie_genre">{genre}</li>
                    );
                })}
            </ul>
            <p className="movie_summary">총평: {summary.slice(0,180)} ...</p>
        </div>
        </Link>
        </div>
    )

}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
}

export default Movie;