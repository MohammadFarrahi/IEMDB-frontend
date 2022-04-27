import axios from "axios";
import { useState } from "react";

export default function CommentForm(props) {

  const {movieId} = props;

  const isLoggedIn = localStorage.getItem('userLoggedIn');

  const [commentText, setCommentText] = useState('');
  const handleSubmit = async e => {
    try {
      const data = {commentMovieId: movieId, text: commentText};
      const response = await axios.post('/comments/', data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="vote-container">
      <span className="title">دیدگاه خود را اضافه کنید:</span>
      <hr className="divider" />
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={e => {setCommentText(e.target.value)}}
        />

        <button
          type="submit"
          className="d-block btn btn-success btn-lg px-5 mx-4"
          disabled={!isLoggedIn}
        >
          ثبت
        </button>
        {!isLoggedIn &&
          <span className="text-danger title">برای ثبت نظر ابتدا وارد شوید.</span>
        }
      </form>
    </div>
  )
}