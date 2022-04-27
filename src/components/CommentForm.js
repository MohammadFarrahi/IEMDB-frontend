import './CommentForm.css';

export default function CommentForm() {

  const isLoggedIn = localStorage.getItem('userLoggedIn');

  return (
    <div className="vote-container">
      <span className="title">دیدگاه خود را اضافه کنید:</span>
      <hr className="divider" />
      <form>
        <input required />
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