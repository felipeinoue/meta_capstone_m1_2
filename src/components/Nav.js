// import './App.css';

import { NAVLINKS } from "../lib";

function Nav() {

  return (
    <nav>
      <ul>
        {
          NAVLINKS.map( link => 
            <li>
              <a href={link.href} key={link.name}>
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
