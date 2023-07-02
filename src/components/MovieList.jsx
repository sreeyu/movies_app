import React from "react";
import styles from './MovieList.module.css'
import Movie from "./Movie";

function MovieList(props){

    return(
        <ul>
            {props.movies.map((movie) => (
                <Movie 
                  key={movie.id}
                  title={movie.title}
                  releaseDate={movie.releaseDate}
                  openingTag={movie.openingTag}
                />
            ))}
        </ul>
    );
};

export default MovieList;