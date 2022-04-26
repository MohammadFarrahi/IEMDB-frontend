import './MoviePreview.js';

export default function MoviePreview(props) {
  const {image, name, rate} = props;

  return (
    <div className="movie-picture-container">
      <div className="movie-picture">
        <img src={image} className="img-rounded"/>
        <div className="hover-cover">
          <span className="lead">{name}</span>
          <span className="lead">{rate}</span>
        </div>
      </div>
    </div>
  );
}