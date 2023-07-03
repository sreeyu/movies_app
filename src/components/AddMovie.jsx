import React, { useRef } from "react";
import styles from './AddMovie.module.css';

function AddMovie(props){

    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const dateRef = useRef('');

    const getSubmitForm = (event) => {

        event.preventDefault();

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: dateRef.current.value
        };

        props.onAddMovie(movie);
    }

    return(
        <form onSubmit={getSubmitForm} >
            <div className={styles.control} >
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className={styles.control} >
                <label htmlFor="opening-text">Opening Text</label>
                <textarea id="opening-text" rows="5" ref={openingTextRef} ></textarea>
            </div>
            <div className={styles.control} >
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={dateRef} />
            </div>
            <button>Add Movie</button>
        </form>
    );
};

export default AddMovie;