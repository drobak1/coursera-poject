import { Star, User } from "lucide-react"


export default function Rating({ starRating, userPic, userName, ratingText }) {

  return (
    <>
      <article className="rating-card">
        <div className="rating-stars">
          { Array.from({ length: starRating }, ( _, index) => (
              <Star key={index} color="#333333" fill="#f4ce14" strokeWidth={1} />
          ))}
        </div>
        <div className="rating-userImg-container">
          <User size={36}/>
          {/* <img src={userPic} alt="User profile picture"></img> */}
        </div>
        <div className="rating-user">{userName}</div>
        <p className="rating-text">{ratingText}</p>
      </article>
    </>
  )
}