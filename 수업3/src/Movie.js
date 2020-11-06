import React from "react"
import propTypes from 'prop-types'

function Movie({id, title, year, summary, poster}){
    return(
        <div>
        <img src={poster} alt={title} title={title}></img>
        <h3>영화제목: {title}</h3>
        <h3>개봉연도: {year}</h3>
        <h3>총평: {summary.slice(0,180)} ...</h3>
        <hr/>
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