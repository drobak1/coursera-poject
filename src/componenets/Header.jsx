import Nav from "./Nav";

export default function Header(){

  return(
    <>
    <div className="header-container">
      <header className="nav-bar">
        <img src="src\assets\Little-Lemon-logos\Asset 16@4x.png" alt="Little Lemon Logo" />
        <Nav ulStyle="nav-links"/>
      </header>
    </div>
    </>
  )
}
