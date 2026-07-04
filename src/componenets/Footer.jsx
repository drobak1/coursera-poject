import Nav from "./Nav"

export default function Footer() {

  return(
    <>
      <footer>
        <img className="footer-logo" src="src\assets\Little-Lemon-logos\Asset 20@4x.png"></img>
        <Nav /> {/* nav */}
        <address className="adress">
          <h4>Contact:</h4>
          Adress:<br />
          Something <br />
          Something <br />
          Tel: <br />
          E-mail:
        </address> {/* contacts */}
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