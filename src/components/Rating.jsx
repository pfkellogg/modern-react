import { useState } from 'react'
import Star from './Star'

const Rating = ({
  heading = 'Rate Your Experience',
  color = 'gold',
  feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']
}) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  // The Array.from() method returns an array from any object with a length property.
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  // console.log(heading)
  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map(star => (
          <Star
            key={star}
            star={star}
            rating={rating}
            color={color}
            hover={hover}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  )
}

export default Rating
