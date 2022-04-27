import { useState } from 'react';
import './RateMovie.css'
import RateStar from './RateStar';

export default function RateMovie(props) {

  const {userRate} = props;
  
  const [stars, setStars] = useState(Array(10).fill(false));

  const handleRate = rate => {
    console.log(rate)
  }

  const handleHover = position => {
    stars.map((star, index) => { 
      if(index + 1 <= userRate){
        stars[index] = true;
      }
      else if(index + 1 <= position){
        stars[index] = true;
      }
      else{
        stars[index] = false;
      }
    })
    setStars(stars.slice());
  }

  // console.log(stars);

  return (
    <>
      <div className="rate-stars-container">
        {
          stars.map((star, index) => (
            <RateStar
              key={index}
              starActive={star}
              onClickHandler={
                function (rate) {
                  return function () {
                    handleRate(rate);
                  }
                }(index + 1)
              }

              onHoverHandler={
                function (rate) {
                  return function () {
                    handleHover(rate);
                  }
                }(index + 1)
              }
            />
          ))
        }
      </div>
    </>
  )
}