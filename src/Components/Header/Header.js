import "./header.scss";
import PhoenixLogo from "../../Assets/images/phoenix-logo.svg";

function Header() {
  return (
    <header className="phoenix-header">
      <nav className="container">
        <div>
          <img src={PhoenixLogo} alt="Phoenix Logo" />
        </div>
        <div>
          <button className="btn btn--primary">
            <span>Let’s talk</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
