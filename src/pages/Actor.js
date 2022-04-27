import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import './Actor.css'

export default function Actor() {

  const { id } = useParams();
  const [actor, setActor] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('actors/' + id);
        const actorRes = response.data.content;
        setActor(actorRes);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();

  }, [])

  return (
    <>
      {actor ?
        <div className="container-fluid actor-container p-0">
          <div className="row m-0">
            <div className="col-md-4 col-12 m-0 p-0 actor-picture">
              <img src={actor.imgUrl} alt={actor.name} />
            </div>
            <div className="col-md-8 col-12 actor-detail-container">
              <div className="actor-info-container m-2">
                <header className="my-3">مشخصات بازیگر</header>
                <div className="actor-info my-4">
                  <div className="info-item">{actor.name} :نام </div>
                  <div className="info-item">{actor.birthDate} :تاریخ تولد</div>
                  <div className="info-item">{actor.nationality} :محصول کشور</div>
                  <div className="info-item">{actor.performedMovies.length} :تعداد فیلم ها</div>
                </div>
              </div>
              <div className="actor-movies-container">
                <header className="my-3">فیلم ها</header>
                <div className="card-container container">
                  <div className="row p-0 m-0">
                    {actor.performedMovies.map(movie => (
                      <div className="col-4" key={movie.id}>
                        <Link to={'/movies/' + movie.id}>

                          <div className="movie-picture">
                            <img src={movie.coverImgUrl} className="img-rounded" alt={movie.name} />
                            <div className="hover-cover">
                              <span className="lead">{movie.name}</span>
                              <span className="lead">{movie.imdbRate}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        :
        <div class="text-center mt-5">
          <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      }
    </>

  )
}