import './Comment.css';

export default function Comment(props) {

  const { comment } = props;

  return (
    <div className="vote-container" key={comment.id}>
      <span className="title">{comment.commentOwnerName}</span>
      <hr className="divider" />
      <div className="vote-body">
        <div className="vote-icon-container">
          <span
            className="iconify down-vote icon"
            data-icon="akar-icons:circle-chevron-down-fill"
          ></span>
          <span>{comment.commentDislikes}</span>
        </div>
        <div className="vote-icon-container">
          <span
            className="iconify up-vote icon"
            data-icon="akar-icons:circle-chevron-up-fill"
          ></span>
          <span>{comment.commentLikes}</span>
        </div>
        <div className="vote-text">
          <span>{comment.text}</span>
        </div>
      </div>
    </div>
  )
}