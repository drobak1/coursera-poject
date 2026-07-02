import Nav from "./Nav"

export default function Footer() {

  return(
    <>
      <footer>
        <img src="src\assets\Little-Lemon-logos\Asset 20@4x.png"></img>
        <article>
          <Nav />
        </article> //nav
        <article className="adress">
          <p>Adress:</p><br />
          <p>Something</p> <br />
          <p>Something</p> <br />
          <p>Tel:</p> <br />
          <p>E-mail</p>
        </article> //contacts
        <article className="soc-links">
          <ul>
            <li><a href=""><ima src=""></ima></a></li> //fb
            <li><a href=""><ima src=""></ima></a></li> //ig
            <li><a href=""><ima src=""></ima></a></li> //
          </ul>
        </article> // socials

      </footer>
    </>
  )

}