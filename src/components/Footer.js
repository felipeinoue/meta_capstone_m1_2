import logo from "../images/logoFooter.png"
import Menu from "./Menu";

function Footer() {
  const menus = [
    {
      title: "Doormat Navigation",
      links: "Home\nAbout\nMenu\nReservations\nOrder Online\nLogin"
    },
    {
      title: "Contact",
      links: "Address\nPhone number\nemail"
    },
    {
      title: "Social Media Links",
      links: "Facebook\nInstagram\nLinkedin"
    },
  ]

  return (
    <footer>
      <div className="cont">
        <img src={logo} alt="logo" />
        <div className="menus">
          {
            menus.map( menu =>
              <Menu menu={menu} key={menu.title} />
            )
          }
        </div>
      </div>
    </footer>
  );
}

export default Footer;
