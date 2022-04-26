import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export default function Watchlist() {

  const [watchlist, setWatchlist] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const loggedInUser = localStorage.getItem('userId');
        const response = await axios.get('users/' + loggedInUser + '/watchlist' + id);
        const watchlist = response.data;
        setWatchlist(watchlist);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();

  }, [])

  return (
    <>
      {watchlist &&
        <>
          <div className="watchlist-container">
            <div className="container p-0 wl-movie-card">
              <div className="row p-0 m-0">
                <div className="col-3 p-0">
                  <div className="wl-movie-picture">
                    <img
                      src="../assets/images/posters/lotr.jpg"
                      className="img-rounded"
                      alt="lotr"
                    />
                  </div>
                </div>
                <div className="col-9 pr-0">
                  <div className="wl-movie-header">
                    <span className="wl-movie-header-title"> The Lord of the Rings </span>
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
                          <span>9.5</span>
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
            <div className="container p-0 wl-movie-card">
              <div className="row p-0 m-0">
                <div className="col-3 p-0">
                  <div className="wl-movie-picture">
                    <img
                      src="../assets/images/posters/johnwick.jpg"
                      className="img-rounded"
                      alt="lotr"
                    />
                  </div>
                </div>
                <div className="col-9 pr-0">
                  <div className="wl-movie-header">
                    <span className="wl-movie-header-title"> John Wick </span>
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
                          <span>9.5</span>
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
            <div className="container p-0 wl-movie-card">
              <div className="row p-0 m-0">
                <div className="col-3 p-0">
                  <div className="wl-movie-picture">
                    <img
                      src="../assets/images/posters/dark.jpg"
                      className="img-rounded"
                      alt="lotr"
                    />
                  </div>
                </div>
                <div className="col-9 pr-0">
                  <div className="wl-movie-header">
                    <span className="wl-movie-header-title"> Dark </span>
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
                          <span>9.5</span>
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
          </div>

          <div className="recommend-movies">
            <div className="r-movies-card">
              <span>فیلم‌های پیشنهادی</span>
              <div className="container p-5">
                <div className="row p-3">
                  <div className="col-3">
                    <div className="movie-picture-container">
                      <div className="movie-picture">
                        <img
                          src="../assets/images/posters/blackwidow.jpg"
                          className="img-rounded"
                          alt="blackwidow"
                        />
                        <div className="hover-cover">
                          <span className="lead">Black Widow</span>
                          <span className="lead">8.2</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="movie-picture-container">
                      <div className="movie-picture">
                        <img
                          src="../assets/images/posters/thor.jpg"
                          className="img-rounded"
                          alt="thor"
                        />
                        <div className="hover-cover">
                          <span className="lead">The Thor</span>
                          <span className="lead">7.2</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="movie-picture-container">
                      <div className="movie-picture">
                        <img
                          src="../assets/images/posters/superman.jpg"
                          className="img-rounded"
                          alt="superman"
                        />
                        <div className="hover-cover">
                          <span className="lead">Super Man</span>
                          <span className="lead">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="movie-picture-container">
                      <div className="movie-picture">
                        <img
                          src="../assets/images/posters/jurassic.jpg"
                          className="img-rounded"
                          alt="jurassic"
                        />
                        <div className="hover-cover">
                          <span className="lead">The Jurassic Park</span>
                          <span className="lead">7.2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}