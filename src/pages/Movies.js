import axios from 'axios';
import { useEffect, useState } from 'react';
import MoviePreview from '../components/Movie';
import './Movies.css';

export default function Movies() {

  const [movies, setMovies] = useState();

  useEffect(() => {
    const response = axios.get('movies/');
    console.log(response)
    const movieList = response['data'];
    setMovies(movieList);
  }, [])

  return (
    <div className="container-fluid p-0">
      <div className="row m-0 movies-container">
        <div className="col-2">
        </div>
        <div className="col-8 movies-body">
          <div className="movie-picture-list container-fluid">
            {movies && 
              movies.map(item => (
                <div className="col-3">
                  <MoviePreview image={item.coverImgUrl} name={item.rate} rate={item.imdbRate} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}