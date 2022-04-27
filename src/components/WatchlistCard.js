

export default function WatchlistCard(props) {
  const {movie} = props;

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
                    <span
                      className="iconify wl-movie-header-icon"
                      data-icon="ri:delete-bin-7-fill"
                    ></span>
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
                          <span>9.9</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="info-line">
                          <span><strong>کارگردان:</strong></span>
                          <span>Folan Folan</span>
                        </div>
                        <div className="info-line">
                          <span><strong>ژانر:</strong></span>
                          <span>فانتزی - تخیلی</span>
                        </div>
                        <div className="info-line">
                          <span><strong>تاریخ انتشار:</strong></span>
                          <span>2001/02/2</span>
                        </div>
                        <div className="info-line">
                          <span><strong>مدت زمان:</strong></span>
                          <span>180 دقیقه</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}