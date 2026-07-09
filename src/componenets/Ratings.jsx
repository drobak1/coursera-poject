import Rating from "./Rating"



export default function Ratings() {

  const ratings = [
    { id: 1,
      starRating: 5,
      user : {name: "Dan", profilePic: ""},
      ratingText: "test ratingu",
    }
  ];

  return (
    <>
      <section className="ratings-section">
        <div className="ratings-container">
          <h3 className="ratings-heading">Testiomnials</h3>
          <div className="ratings-wrapper">
            {
              ratings.map( rating => <Rating key={rating.id}
                                            starRating={rating.starRating}
                                            userName={rating.user.name}
                                            userPic={rating.user.profilePic}
                                            ratingText={rating.ratingText}
                                    />)
            }
          </div>
        </div>
      </section>
    </>
  )
}