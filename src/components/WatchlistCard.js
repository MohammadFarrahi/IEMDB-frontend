import axios from "axios";
import { getUserId } from "../functions/getUserId";
import Request from "../functions/Request";


export default function WatchlistCard(props) {
  const { movie, deleteFromWatchlist } = props;

  const handleDeleteFromList = async () => {
    try {
      const userId = getUserId();
      const response = await Request.delete('/users/' + userId + '/watchlist/' + movie.id);
      if(response.data.status){
        deleteFromWatchlist(movie);
      }
    }catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="container p-0 wl-movie-card">
      <div className="row p-0 m-0">
        <div className="col-3 p-0">
          <div className="wl-movie-picture">
            <img
              src={movie.coverImgUrl}
              className="img-rounded"
              alt={movie.name}
            />
          </div>
        </div>
        <div className="col-9 pr-0">
          <div className="wl-movie-header">
            <span className="wl-movie-header-title"> {movie.name} </span>
            <div
              onClick={handleDeleteFromList}
            >
              <span
                className="iconify wl-movie-header-icon"
                data-icon="ri:delete-bin-7-fill"
              ></span>
            </div>
          </div>
          <div className="wl-movie-body">
            <div className="row pt-2">
              <div className="col-6">
                <div className="info-line">
                  <span><strong>امتیاز IMDB:</strong></span>
                  <span>{movie.imdbRate}</span>
                </div>
                <div className="info-line">
                  <span><strong>امتیاز کاربران:</strong></span>
                  <span>{movie.averageRating || 0}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="info-line">
                  <span><strong>کارگردان:</strong></span>
                  <span>{movie.director}</span>
                </div>
                <div className="info-line">
                  <span><strong>ژانر:</strong></span>
                  <span>{movie.genres.join(' - ')}</span>
                </div>
                <div className="info-line">
                  <span><strong>تاریخ انتشار:</strong></span>
                  <span>{movie.releaseDate}</span>
                </div>
                <div className="info-line">
                  <span><strong>مدت زمان:</strong></span>
                  <span>{movie.duration} دقیقه</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}