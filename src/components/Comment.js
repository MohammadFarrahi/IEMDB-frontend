import axios from 'axios';
import './Comment.css';

export default function Comment(props) {

  const { comment, updateComment } = props;

  const handleVote = async vote => {
    try {
      const data = { vote };
      const response = await axios.post('/comments/' + comment.id + '/vote/', data);
      let newComment = response.data;
      updateComment(newComment);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="vote-container" key={comment.id}>
      <span className="title">{comment.commentOwnerName}</span>
      <hr className="divider" />
      <div className="vote-body">
        <div className="vote-icon-container">
          <div onClick={() => { handleVote(-1) }}>
            <span
              className="iconify down-vote icon"
              data-icon="akar-icons:circle-chevron-down-fill"
            ></span>
          </div>
          <span>{comment.commentDislikes}</span>
        </div>
        <div className="vote-icon-container">
          <div onClick={() => { handleVote(1) }}>
            <span
              className="iconify up-vote icon"
              data-icon="akar-icons:circle-chevron-up-fill"
            ></span>
          </div>
          <span>{comment.commentLikes}</span>
        </div>
        <div className="vote-text">
          <span>{comment.text}</span>
        </div>
      </div>
    </div>
  )
}