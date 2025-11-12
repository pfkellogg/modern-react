import { useState } from 'react'

const Rating = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  // The Array.from() method returns an array from any object with a length property.
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  const feedbackMessages = ['Terrible', 'Poor', 'Average', 'Good', 'Excellent']

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map(star => (
          <span
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
            key={star}
            className={`star ${star <= (hover || rating) ? 'active' : ''}`}
          >
            {'\u2605'}
          </span>
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  )
}

export default Rating
