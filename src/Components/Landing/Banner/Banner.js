import "./banner.scss";

import BannerBg from "../../../Assets/images/banner-bg.png";
import BannerBgMobile from "../../../Assets/images/mobile-hero-img.png";

function Banner() {
  return (
    <section className="landing-banner">
      <div className="container">
        <picture className="w-100 banner-bg">
          <source media="(min-width:768px)" srcSet={BannerBg} />
          <img src={BannerBgMobile} alt="banner backround" />
        </picture>
        <div className="banner-content">
          <h1>Building Mobile Apps with Experiences that are Scalable</h1>
          <p>
            We turn ideas into user-friendly, scalable mobile apps, fostering
            rapid adoption and sustainable growth.
          </p>
          <button className="btn btn--white">Let’s talk</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;