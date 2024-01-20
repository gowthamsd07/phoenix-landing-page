import { Col, Row } from "antd";
import "./app-development.scss";

import AndroidIcon from "../../../Assets/images/Icon-android.svg";
import iosIcon from "../../../Assets/images/Icon-ios.svg";
import reactIcon from "../../../Assets/images/Icon-reactnative.svg";

function AppDevelopment() {
  return (
    <section className="landing-appdev section-padding">
      <div className="container">
        <h2 className="section-title">
          Bridging Technology & Innovation with Android, iOS & Web Apps
          Development
        </h2>
        <Row gutter={20}>
          <Col md={{ span: 8 }}>
            <img
              rel="preload"
              fetchpriority="high"
              as="image"
              type="image/webp"
              src={AndroidIcon}
              alt="Android icon"
            />
            <div>
              <h6>Android Apps</h6>
              <p>
                Leveraging versatility to create apps that are feature-rich,
                scalable, and adapt to your business needs.
              </p>
            </div>
          </Col>
          <Col md={{ span: 8 }}>
            <img
              rel="preload"
              fetchpriority="high"
              as="image"
              type="image/webp"
              src={iosIcon}
              alt="ios icon"
            />
            <div>
              <h6>iOS Apps</h6>
              <p>
                Focusing on intuitive design and seamless performance to deliver
                exceptional user experiences.
              </p>
            </div>
          </Col>
          <Col md={{ span: 8 }}>
            <img
              rel="preload"
              fetchpriority="high"
              as="image"
              type="image/webp"
              src={reactIcon}
              alt="react native icon"
            />
            <div>
              <h6>Progressive Web Apps</h6>
              <p>
                Building responsive, fast, and user-friendly apps with
                consistency across all devices & platforms.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default AppDevelopment;
