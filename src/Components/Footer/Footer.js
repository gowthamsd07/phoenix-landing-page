import { Col, Row } from "antd";
import "./footer.scss";
import PhoenixLogo from "../../Assets/images/phoenix-logo.svg";
import UkFlag from "../../Assets/images/uk-flag.svg";
import IndiaFlag from "../../Assets/images/india-flag.svg";
import FacebookIcon from "../../Assets/images/ic_baseline-facebook.svg";
import InstaIcon from "../../Assets/images/ri_instagram-fill.svg";
import LinkedinIcon from "../../Assets/images/mdi_linkedin.svg";
import TwitterIcon from "../../Assets/images/pajamas_twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <Row gutter={24}>
          <Col xl={6} className="copy-rights">
            <img className="brand-logo" src={PhoenixLogo} alt="Phoenix Logo" />
            <p>2024 © All rights reserved.</p>
            <p>Phoenix Tech Labs India Pvt Ltd</p>
          </Col>
          <Col xl={{ span: 4, offset: 2 }} className="office-address uk">
            <div>
              <div className="title">
                <img src={UkFlag} alt="UK flag" />
                <h6>Phoenix Tech Labs</h6>
              </div>
              <p>128 City Road, London, United Kingdom, EC1V 2NX</p>
            </div>
          </Col>
          <Col xl={{ span: 6, offset: 2 }} className="office-address india">
            <div>
              <div className="title">
                <img src={IndiaFlag} alt="India flag" />
                <h6>Phoenix Tech Labs</h6>
              </div>
              <p>
                147 Vipul Trade Center, Sohna - Gurgaon Rd, Sector 48, Gurugram,
                Haryana 122001
              </p>
              <p>+91 9650016787</p>
            </div>
          </Col>
          <Col xl={{ span: 4 }} className="social-media">
            <div className="title-wrap">
              <h6>Follow us at</h6>
              <div className="social-icons">
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Phoenix-Tech-Consulting/100063590600838/"
                  rel="noreferrer"
                >
                  <img src={FacebookIcon} alt="Facebook Icon" />
                </a>
                <a target="_blank" href="www.instagram.com">
                  <img src={InstaIcon} alt="Insta Icon" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/phoenix-tech-consulting/"
                  rel="noreferrer"
                >
                  <img src={LinkedinIcon} alt="Linkedin Icon" />
                </a>
                <a target="_blank" href="www.twitter.com">
                  <img src={TwitterIcon} alt="Twitter Icon" />
                </a>
              </div>
            </div>
            <div className="link-wrap">
              <a
                target="_blank"
                href="https://phoenixtech.consulting/privacy-policy.html"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              <a
                target="_blank"
                href="https://phoenixtech.consulting/privacy-policy.html"
                rel="noreferrer"
              >
                FAQ
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
