const Rating = () => {
  // The Array.from() method returns an array from any object with a length property.
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map(star => (
          <span key={star} className="star">
            {'\u2605'}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Rating
