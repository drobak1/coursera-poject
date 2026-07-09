import { NavLink } from "react-router"

export default function Nav( {ulStyle} ) {

  return(
    <>
      <nav>
        <ul className={ulStyle}>
          <li className="nav-items"><NavLink to="/">Home</NavLink></li>
          <li className="nav-items"><a href="" role="button">About</a></li>
          <li className="nav-items"><a href="" role="button">Menu</a></li>
          <li className="nav-items"><NavLink to="/booking"
                       className={({ isActive }) =>
                        isActive ? "active-nav" : ""
                      }
                  >Reservations</NavLink></li>
          <li className="nav-items"><a href="" role="button">Order Online</a></li>
          <li className="nav-items"><a href="" role="button">Login</a></li>
        </ul>
      </nav>
    </>
  )
}