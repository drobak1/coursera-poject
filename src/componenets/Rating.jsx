
export default function Rating({ starRating, userPic, userName, ratingText }) {

  return (
    <>
      <article className="rating-card">
        <div className="rating-stars">{starRating}</div>
        <img src={userPic} alt="User profile picture"></img>
        <div className="rating-user">{userName}</div>
        <p className="rating-text">{ratingText}</p>
      </article>
    </>
  )
}