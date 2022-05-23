import './Watchlist.css';

import axios from "axios";
import { useEffect, useState } from "react"
import WatchlistCard from "../components/WatchlistCard";
import MoviePreview from '../components/MoviePreview'
import { Link } from 'react-router-dom';
import { getUserId } from '../functions/getUserId';


export default function Watchlist() {

  const [watchlist, setWatchlist] = useState();
  const [recommendList, setRecommendList] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const loggedInUser = getUserId();

        let response = await axios.get('/users/' + loggedInUser + '/watchlist');
        const watchlist = response.data.content;
        setWatchlist(watchlist);

        response = await axios.get('/users/' + loggedInUser + '/recommended')
        const recList = response.data.content;
        setRecommendList(recList);

      } catch (e) {
        console.log(e)
      }
    }
    fetchData();

  }, []);

  const deleteFromWatchlist = movie => {
    const movieIndex = watchlist.findIndex(x => x.id === movie.id);
    watchlist.splice(movieIndex, 1);
    setWatchlist(watchlist.slice());
  };

  return (
    <>
      {(watchlist && recommendList) ?
        <>
          <div className="watchlist-container">
            {watchlist.map(item => (
              <WatchlistCard deleteFromWatchlist={deleteFromWatchlist} movie={item} />
            ))}
          </div>

          <div className="recommend-movies">
            <div className="r-movies-card">
              <span>فیلم‌های پیشنهادی</span>
              <div className="container p-5">
                <div className="row p-3">
                  {recommendList.map(item => (
                    <div className="col-4">
                      <Link to={'/movies/' + item.id}>

                        <MoviePreview image={item.coverImgUrl} name={item.name} rate={item.imdbRate} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </> :
        <div class="text-center mt-5">
          <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      }
    </>
  )
}