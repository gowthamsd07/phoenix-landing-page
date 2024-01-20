import "./header.scss";
import PhoenixLogo from "../../Assets/images/phoenix-logo.svg";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

function Header() {
  return (
    <header className="phoenix-header">
      <nav className="container">
        <div>
          <img src={PhoenixLogo} alt="Phoenix Logo" />
        </div>
        <div>
          <button className="btn btn--primary">
            <ScrollLink
              to="contact-form"
              spy={true}
              smooth={true}
              offset={-100}
              duration={2000}
            >
              <span>Let’s talk</span>
            </ScrollLink>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
