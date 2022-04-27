import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

import './Movie.css'


export default function Movie() {

  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('movies/' + id);
        const movieRes = response.data.content;
        setMovie(movieRes);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();

  }, [])


  const updateComment = editedComment => {
    const commentIndex = movie.comments.findIndex(x => x.id === editedComment.id);
    movie.comments[commentIndex] = editedComment;
    setMovie({...movie});
  }

  const addComment = newComment => {
    movie.comments.push(newComment);
    setMovie({...movie});
  }


  return (
    <>
      {movie &&
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
                </div>
                <div className="col-6 p-0">
                  <div className="movie-header-info">
                    <span className="justify-left">{movie.name}</span>
                    <span className="justify-right">{movie.director}</span>
                    <span className="justify-right">
                      {movie.writers}
                    </span>
                    <span className="justify-right">{movie.duration}</span>
                  </div>
                  <div className="movie-header-info">
                    <span className="justify-left">{movie.releaseDate}</span>
                    <hr className="divider" />
                    <span className="justify-justified">{movie.summary}</span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="movie-header-rate">
                    <span className="lead text-center movie-rate">{movie.imdbRate}</span>
                    <div className="user-rate-info">
                      <span className="rate-title">امتیاز کاربران</span>
                      <span className="rate-value">{movie.averageRating}</span>
                      <span className="rate-count">{movie.rateCount}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card-container">
                  <span>بازیگران</span>
                  <div className="actor-circle-container">
                    {movie.cast.map(item => (
                      <Link key={item.id} to={'/actors/' + item.id}>
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
                  <CommentForm addComment={addComment} movieId={movie.id}/>
                  {movie.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} updateComment={updateComment}/>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>

      }

    </>

  )
}