import React, { Fragment, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {

  //Using state to store Movie info
  const [movie, setMovie] = useState([]);

  //Function the fetches movie info from SWAPI
  function getMovies(){

    //fetching from the API
    fetch("https://swapi.py4e.com/api/films/")
    .then((response) => {
      return response.json()
    }).then((data) => {

      //Format the object to filter out unwanted info and to change keys
      const formattedMovie = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl
        }
      })
      setMovie(formattedMovie)
    })
  }

  
  return (
    <Fragment>
      <section>
        <button onClick={getMovies} >Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movie} />
      </section>
    </Fragment>
  );
}

export default App;
