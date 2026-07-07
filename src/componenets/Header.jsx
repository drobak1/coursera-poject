import Nav from "./Nav";

export default function Header(){

  return(
    <>
      <header className="header">
        <div className="header-container">
          <div className="nav-bar">
            <img src="src\assets\Little-Lemon-logos\Asset 16@4x.png" alt="Little Lemon Logo" className="header-logo"/>
            <Nav ulStyle="nav-links"/>
          </div>
        </div>
      </header>
    </>
  )
}
