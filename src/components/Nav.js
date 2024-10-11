import { Link } from "react-router-dom";


function Nav() {

  const links = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About",
      href: "#"
    },
    {
      name: "Menu",
      href: "#"
    },
    {
      name: "Reservations",
      href: "/reservations"
    },
    {
      name: "Order Online",
      href: "#"
    },
    {
      name: "Login",
      href: "#"
    },
  ]

  return (
    <nav>
      <ul>
        {
          links.map( link => 
            <li key={link.name}>
              <Link
                to={link.href} 
                className='lead-text'
              >
                {link.name}
              </Link>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default Nav;
