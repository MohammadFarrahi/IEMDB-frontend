import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import { isUserLoggedIn } from "../components/isUserLoggedIn";
import RateMovie from "../components/RateMovie";

import './Movie.css';


export default function Movie() {

  const [movie, setMovie] = useState();
  const { id } = useParams();

  const [error, setError] = useState('');

  const isLoggedIn = isUserLoggedIn();
  const userId = localStorage.getItem('userId');

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('movies/' + id);
        const movieRes = response.data.content;
        setMovie(movieRes);
      } catch (e) {
        if(e.response.status === 404) {
          navigate('/404');
        }
      }
    }
    fetchData();

  }, [])


  const updateComment = editedComment => {
    const commentIndex = movie.comments.findIndex(x => x.id === editedComment.id);
    movie.comments[commentIndex] = editedComment;
    setMovie({ ...movie });
  }

  const addComment = newComment => {
    movie.comments.push(newComment);
    setMovie({ ...movie });
  }

  const updateRate = newMovie => {
    movie.userRate = newMovie.userRate;
    movie.rateCount = newMovie.rateCount;
    movie.averageRating = newMovie.averageRating;

    setMovie({ ...movie });
  }

  const handleAddToWatchlist = async () => {
    try {
      setError('');
      const data = { movieId: movie.id }
      const response = await axios.post('/users/' + userId + '/watchlist/', data);
      if (response.data.status) {
        navigate('/watchlist/');
      }
    } catch (e) {
      console.log(e)
      if (e.response.data.message === 'AgeLimitError'){
        setError('سن شما در رده سنی فیلم نیست');
      }
    }
  }

  return (
    <>
      {movie ?
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-12 header-img-container">
              <img
                src={movie.coverImgUrl}
                className="img"
              />
            </div>
          </div>
          <div className="row m-0 movie-content-container">
            <div className="col-2"></div>
            <div className="col-8 container">
              <div className="row">
                <div className="col-3 movie-header-img">
                  <img src={movie.imgUrl} />
                  {isLoggedIn &&
                    <>
                      <button
                        onClick={handleAddToWatchlist}
                        className="btn btn-danger"
                      >
                        افزودن به لیست
                      </button>
                      {error &&
                        <div className="text-center text-danger">
                          <span className="lead text-danger">{error}</span>
                        </div>
                      }
                    </>

                  }
                </div>
                <div className="col-6 p-0">
                  <div className="movie-header-info">
                    <span className="justify-left">{movie.name}</span>
                    <span className="justify-right">کارگردان: {movie.director}</span>
                    <span className="justify-right">
                      نویسنده: {movie.writers.join(', ')}
                    </span>
                    <span className="justify-right">مدت زمان: {movie.duration} دقیقه</span>
                  </div>
                  <div className="movie-header-info">
                    <span className="justify-left">تاریخ انتشار: {movie.releaseDate}</span>
                    <span className="justify-left">محدودیت سنی: {movie.ageLimit} سال</span>
                    <hr className="divider" />
                    <span className="justify-justified">{movie.summary}</span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="movie-header-rate">
                    <span className="lead text-center movie-rate">{movie.imdbRate}</span>
                    <div className="user-rate-info">
                      <span className="rate-title">امتیاز کاربران</span>
                      <RateMovie updateRate={updateRate} userRate={movie.userRate} movieId={movie.id} />
                      <span className="rate-value">{movie.averageRating}</span>
                      <span className="rate-count">{movie.rateCount} رای</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card-container">
                  <span>بازیگران</span>
                  <div className="actor-circle-container">
                    {movie.cast.map(item => (
                      <Link className="mx-4" key={item.id} to={'/actors/' + item.id}>
                        <img
                          src={item.imgUrl}
                          className="rounded-circle"
                          alt={item.name}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="card-container">
                  <span>دیدگاه‌ها</span>
                  <CommentForm addComment={addComment} movieId={movie.id} />
                  {movie.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} updateComment={updateComment} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        :
        <div class="text-center mt-5">
          <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      }

    </>

  )
}