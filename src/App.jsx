import React, { Fragment } from 'react';
import styles from './App.module.css'
import MovieList from './components/MovieList';

const DUMMY_MOVIES = [
  {
    id: 'm1',
    title: 'Random movie 1',
    openingText: 'Plot of movie 1',
    releaseDate: '2014-08-21'
  },
  {
    id: 'm2',
    title: 'Random movie 2',
    openingText: 'Plot of movie 2',
    releaseDate: '2012-05-25'
  }
];


function App() {
  return (
    <Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={DUMMY_MOVIES} />
      </section>
    </Fragment>
  );
}

export default App;
