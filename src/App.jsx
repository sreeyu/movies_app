import React, { Fragment, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {

  //Using state to store Movie info
  const [movie, setMovie] = useState([]);

  //Handle loading state
  const [isLoading, setIsLoading] = useState(false);

  //Handle Error State
  const [error, setError] = useState(null);

  //Function the fetches movie info from SWAPI
  async function getMovies(){

    setIsLoading(true);
    setError(null);
    
   try{

    const response = await fetch("https://swapi.py4e.com/api/films/")

    if(!response.ok){
      throw new Error('Something Went Wrong!');
    }
    
    const data = await response.json();

      //Format the object to filter out unwanted info and to change keys
      const formattedMovie = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl
        };
      });
      setMovie(formattedMovie);
      
   } catch(error){
    setError(error.message);
   }
   setIsLoading(false);
  }

  //Setting up content based on state
  let content = <p>No Movies Found. Please Try Fetching Movies</p>

  if (isLoading && !error){
    content = <p>Loading...</p>
  }

  if(movie.length > 0){
    content  = <MovieList movies={movie} />
  }

  if (error){
    content = <p>{error}</p>
  }
  
  return (
    <Fragment>
      <section>
        <button onClick={getMovies} >Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </Fragment>
  );
}

export default App;
