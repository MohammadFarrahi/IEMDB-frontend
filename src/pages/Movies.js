import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoviePreview from '../components/MoviePreview';
import './Movies.css';

const rateCompare = (a, b) => {
  return a.imdbRate - b.imdbRate;
}

const dateCompare = (a, b) => {
  if (a.releaseDate > b.releaseDate)
    return 1;
  else if (a.releaseDate === b.releaseDate)
    return 0;
  else
    return -1;
}

export default function Movies() {

  const [movies, setMovies] = useState();

  const handleSort = basedOn => {
    let compareFunction;
    if (basedOn === 'date') {
      compareFunction = dateCompare;
    }
    else if (basedOn === 'rate') {
      compareFunction = rateCompare;
    }
    movies.sort(compareFunction);
    movies.reverse();
    setMovies(movies.slice());
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('movies');
        const movieList = response.data;
        setMovies(movieList);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  }, [])
  return (
    <div className="container-fluid p-0">
      <div className="row m-0 movies-container">
        <div className="col-2">
        </div>
        <div className="col-8 movies-body">
          <div className="movie-picture-list container-fluid">
            <div className="row p-3">
              {movies &&
                movies.map(item => (
                  <div className="col-3 mb-3" key={item.id}>
                    <Link to={'/movies/' + item.id}>
                      <MoviePreview image={item.coverImgUrl} name={item.name} rate={item.imdbRate} />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="rank-box-container">
            <span dir="rtl" className="lead">رتبه‌بندی بر اساس:</span>
            <div className="rank-box">
              <span dir="rtl" className="lead" onClick={() => {handleSort('date')}}> تاریخ</span>
              <span dir="rtl" className="lead" onClick={() => {handleSort('rate')}}>امتیاز imdb</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}