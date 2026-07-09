import Hero from "../componenets/Hero"
import Ratings from "../componenets/Ratings"
import Specials from "../componenets/Specials"

export default function LandingPage() {
    return (
      <>
        <div className="content-wrapper">
          <div className="page">
            <Hero />
            <Specials />  {/* //meals */}
            <Ratings />  {/* //testimonials */}
            <section></section>   {/* //about */}
          </div>
        </div>
      </>
  )
}
