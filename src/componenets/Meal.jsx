export default function Meal({ name, price, desc, img }) {
  return (
    <>
      <article className="special-card">
        <div className="special-img-container">
          <img src={img} alt={name} ></img>
        </div>
        <div className="special-content">
          <div className="special-heading">
            <h3>{name}</h3>
            <span className="special-price">${price}</span>
          </div>
          <p className="special-description">{desc}</p>
        </div>
      </article>
    </>
  )
}