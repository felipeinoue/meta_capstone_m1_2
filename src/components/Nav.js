
import { NAVLINKS } from "../lib";

function Nav() {

  return (
    <nav>
      <ul>
        {
          NAVLINKS.map( link => 
            <li key={link.name}>
              <a 
                className='lead-text'
                href={link.href} 
              >
                {link.name}
              </a>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default Nav;
