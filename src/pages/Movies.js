import axios from 'axios';
import { useEffect, useState } from 'react';
import MoviePreview from '../components/MoviePreview';
import './Movies.css';

export default function Movies() {

  const [movies, setMovies] = useState();

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
                    <MoviePreview image={item.coverImgUrl} name={item.name} rate={item.imdbRate} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div class="col-2">
        <div class="rank-box-container">
          <span dir="rtl" class="lead">رتبه‌بندی بر اساس:</span>
          <div class="rank-box">
            <span dir="rtl" class="lead"> تاریخ</span>
            <span dir="rtl" class="lead">امتیاز imdb</span>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}