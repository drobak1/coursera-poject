import Hero from "../componenets/Hero"
import Specials from "../componenets/Specials"

export default function LandingPage() {
    return (
      <>
        <div className="content-wrapper">
          <div className="page">
            <Hero />
            <Specials />  //meals
            <section></section>   //testimonials
            <section></section>   //about
          </div>
        </div>
      </>
  )
}
