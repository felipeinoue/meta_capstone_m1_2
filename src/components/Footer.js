import logo from "../images/logo footer.png"
import { NAVLINKS } from "../lib";

function Footer() {
  const infos = [
    {
      title: "Doormat Navigation",
      links: NAVLINKS
    },
    {
      title: "Contact",
      links: [
        {
          name: "Address",
          href: "#"
        },
        {
          name: "Phone Number email",
          href: "#"
        },
      ]
    },
    {
      title: "Social Media Links",
      links: [
        {
          name: "Facebook",
          href: "#"
        },
        {
          name: "Linkedin",
          href: "#"
        },
        {
          name: "Instagram",
          href: "#"
        },
      ]
    },
  ]

  return (
    <footer>
      <img src={logo} alt="logo" height={100} />
      <ul>
        {
          infos.map( info =>
            <li>
              <p>{info.title}</p>
              {
                info.links.map( link => 
                  <li>
                    <a href={link.href} key={link.name}>
                      {link.name}
                    </a>
                  </li>
                )
              }
            </li>
          )
        }
      </ul>
    </footer>
  );
}

export default Footer;
