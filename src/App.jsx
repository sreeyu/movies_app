import React, { Fragment, useState, useEffect, useCallback } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {

  //Using state to store Movie info
  const [movie, setMovie] = useState([]);

  //Handle loading state
  const [isLoading, setIsLoading] = useState(false);

  //Handle Error State
  const [error, setError] = useState(null);

  //Function the fetches movie info from SWAPI
  const getMovies = useCallback (async() => {

    setIsLoading(true);
    setError(null);
    
   try{

    const response = await fetch("https://movies-http-f8d53-default-rtdb.firebaseio.com/films.json")

    if(!response.ok){
      throw new Error('Something Went Wrong!');
    }
    
    const data = await response.json();

    const loadedMovies = []

    for (const key in data){
      loadedMovies.push({
        id: key,
        title: data[key].title,
        openingText: data[key].openingText,
        releaseDate: data[key].releaseDate
      });
    }
    setMovie(loadedMovies);
      
   } catch(error){
    setError(error.message);
   }
   setIsLoading(false);
  }, [])

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const getEnteredMovie = (async (movie) => {
    const response = await fetch('https://movies-http-f8d53-default-rtdb.firebaseio.com/films.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  })

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
        <AddMovie onAddMovie={getEnteredMovie} />
      </section>
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
