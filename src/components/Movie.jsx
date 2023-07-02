import React from "react";
import styles from './Movie.module.css';

function Movie(props){

    return (
        <li className={styles.movie} >
            <h2>{props.title}</h2>
            <h3>{props.openingText}</h3>
        </li>
    );
};

export default Movie;