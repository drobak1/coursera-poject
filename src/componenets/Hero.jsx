export default function Hero() {

  return (
    <>
      <div className="hero-bar">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are family owned Mediterranean restaurant focused on traditional recipes served with a modern twist!</p>
            <button className="button">Reserve a Table</button>
          </div>
          <div className="hero-img-container">
            <img src="src\assets\images\restauranfood.jpg" alt="Server with bruschettas" id="hero-img"/>
          </div>
        </section>
      </div>
    </>
  )
}