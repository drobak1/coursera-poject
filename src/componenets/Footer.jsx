import Nav from "./Nav"

export default function Footer() {

  return(
    <>
      <footer>
        <img src="src\assets\Little-Lemon-logos\Asset 20@4x.png"></img>
        <article>
          <Nav />
        </article> {/* nav */}
        <article className="adress">
          <address>
            Adress:<br />
            Something <br />
            Something <br />
            Tel: <br />
            E-mail:
          </address>
        </article> {/* contacts */}
        <article className="soc-links">
          <ul>
            <li><a href=""><img src="null"></img></a></li> {/* fb */}
            <li><a href=""><img src="null"></img></a></li> {/* ig */}
            <li><a href=""><img src="null"></img></a></li> {/* // */}
          </ul>
        </article> {/* socials */}

      </footer>
    </>
  )

}