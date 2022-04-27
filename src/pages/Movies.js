import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [fetchedMovies, setFetchedMovies] = useState();


  const [filterBy, setFilterBy] = useState();
  const [searchValue, setSearchValue] = useState('');

  const location = useLocation();


  const filterName = item => {
    return item.name.includes(searchValue);
  }

  const filterGenre = item => {
    for (var genre in item.genres) {
      if (genre.includes(searchValue))
        return true;
    }
    return false;
  }

  const filterDate = item => {
    return item.releaseDate.includes(searchValue);
  }

  const getFilterFunc = filterMode => {
    if (filterMode === 'name')
      return filterName;

    if (filterMode === 'genre')
      return filterGenre;

    if (filterMode === 'date')
      return filterDate;
  }

  useEffect(() => {
    if (location.search) {
      const searchText = location.search;
      console.log(searchText);
      const pairs = searchText.split('&');

      const filter = pairs[0].split('=')[1];
      const value = pairs[1].split('=')[1];

      console.log({ filter, value });

      setFilterBy(filter);
      setSearchValue(value);
    }
  }, [location.search]);

  useEffect(() => {
    if (!fetchedMovies || !movies)
      return
    let newMovies = fetchedMovies.slice();
    newMovies = newMovies.filter(getFilterFunc(filterBy));

    setMovies(newMovies);    
  }, [filterBy, searchValue]);

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
        const movieList = response.data.content;
        setMovies(movieList);
        setFetchedMovies(movieList);
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
              <span dir="rtl" className="lead" onClick={() => { handleSort('date') }}> تاریخ</span>
              <span dir="rtl" className="lead" onClick={() => { handleSort('rate') }}>امتیاز imdb</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}