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
        const actorRes = response.data;
        setActor(actorRes);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();

  }, [])

  return (
    <>
      {actor &&
        <div class="container-fluid actor-container p-0">
          <div class="row m-0">
            <div class="col-md-4 col-12 m-0 p-0 actor-picture">
              <img src={actor.imgUrl} alt={actor.name} />
            </div>
            <div class="col-md-8 col-12 actor-detail-container">
              <div class="actor-info-container m-2">
                <header class="my-3">مشخصات بازیگر</header>
                <div class="actor-info my-4">
                  <div class="info-item">{actor.name}</div>
                  <div class="info-item">{actor.birthDate}</div>
                  <div class="info-item">{actor.nationality}</div>
                  <div class="info-item">{actor.performedMovies.length}</div>
                </div>
              </div>
              <div class="actor-movies-container">
                <header class="my-3">فیلم ها</header>
                <div class="card-container container">
                  <div class="row p-0 m-0">
                    {actor.performedMovies.map(movie => (
                      <Link to={'/movies/' + movie.id}>

                        <div class="col-4 p-0" key={movie.id}>
                          <div class="movie-picture">
                            <img src={movie.coverImgUrl} class="img-rounded" alt={movie.name} />
                            <div class="hover-cover">
                              <span class="lead">{movie.name}</span>
                              <span class="lead">{movie.imdbRate}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      }
    </>

  )
}