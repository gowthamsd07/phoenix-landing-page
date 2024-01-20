import "./banner.scss";

import BannerBg from "../../../Assets/images/banner-bg.webp";
import BannerBgMobile from "../../../Assets/images/mobile-form-img.webp";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

function Banner() {
  return (
    <section className="landing-banner">
      <div className="container">
        <picture className="w-100 banner-bg">
          <source
            rel="preload"
            fetchpriority="high"
            as="image"
            type="image/webp"
            media="(min-width:768px)"
            srcSet={BannerBg}
          />
          <img
            rel="preload"
            fetchpriority="high"
            as="image"
            type="image/webp"
            src={BannerBgMobile}
            alt="banner backround"
          />
        </picture>
        <div className="banner-content">
          <h1>Building Mobile Apps with Experiences that are Scalable</h1>
          <p>
            We turn ideas into user-friendly, scalable mobile apps, fostering
            rapid adoption and sustainable growth.
          </p>
          <button className="btn btn--white">
            <ScrollLink
              to="contact-form"
              spy={true}
              smooth={true}
              offset={-100}
              duration={2000}
            >
              Let’s talk
            </ScrollLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
