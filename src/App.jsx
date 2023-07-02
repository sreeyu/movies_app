import React, { Fragment } from 'react';
import './App.css';
import MovieList from './components/MovieList';

const DUMMY_MOVIES = [
  {
    id: 'm1',
    title: 'Random movie 1',
    openingText: 'This is the caption for movie 1',
    releaseDate: '2014-08-21'
  },
  {
    id: 'm2',
    title: 'Random movie 2',
    openingText: 'This is the caption for movie 2',
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
