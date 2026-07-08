
import Meal from "./Meal"

export default function Specials() {
  const specials = [
    { id: 1,
      name: "Greek Salad",
      price: 12.99,
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      img: "/meals/greek salad.jpg",
    },
    {
      id: 2,
      name: "Bruschetta",
      price: 5.99,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      img: "/meals/bruchetta.svg",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: 5.00,
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      img: "/meals/lemon dessert.jpg",
    }
  ]
  return (
    <>
      <section className="specials">
        <div className="specials-heading">
          <h1>This Week Specials!</h1>
          <button className="button">Order Online!</button>
        </div>
        
        <div className="specials-wrapper">
          {
            specials.map( special => <Meal key={special.id}
                                           name={special.name}
                                           price={special.price}
                                           desc={special.description}
                                           img={special.img}
                                     />)
          }
        </div>
      </section>
    </>
  )
}