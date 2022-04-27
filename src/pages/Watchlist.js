import './Watchlist.css';

import axios from "axios";
import { useEffect, useState } from "react"
import WatchlistCard from "../components/WatchlistCard";
import MoviePreview from '../components/MoviePreview'


export default function Watchlist() {

  const [watchlist, setWatchlist] = useState();
  const [recommendList, setRecommendList] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const loggedInUser = localStorage.getItem('userId');

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

  }, [])

  return (
    <>
      {watchlist && recommendList &&
        <>
          <div className="watchlist-container">
            {watchlist.map(item => (
              <WatchlistCard movie={item} />
            ))}
          </div>

          <div className="recommend-movies">
            <div className="r-movies-card">
              <span>فیلم‌های پیشنهادی</span>
              <div className="container p-5">
                <div className="row p-3">
                  {recommendList.map(item => (
                    <div className="col-4">
                      <MoviePreview image={item.coverImgUrl} name={item.name} rate={item.imdbRate} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </>
      }
    </>
  )
}