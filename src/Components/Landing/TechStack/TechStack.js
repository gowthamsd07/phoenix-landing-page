import { Col, Row } from "antd";
import "./tech-stack.scss";

import TechStack1 from "../../../Assets/images/swift-logo.svg";
import TechStack2 from "../../../Assets/images/android-logo.svg";
import TechStack3 from "../../../Assets/images/kotlin-logo.svg";
import TechStack4 from "../../../Assets/images/java-logo.svg";
import TechStack5 from "../../../Assets/images/angular-logo.svg";
import TechStack6 from "../../../Assets/images/dart-logo.svg";
import TechStack7 from "../../../Assets/images/react-logo.svg";
import TechStack8 from "../../../Assets/images/mysql-logo.svg";
import TechStack9 from "../../../Assets/images/flutter-logo.svg";
import TechStack10 from "../../../Assets/images/ionic-logo.svg";
import TechStack11 from "../../../Assets/images/postgresql-logo.svg";
import TechStack12 from "../../../Assets/images/csharp-logo.svg";
import TechStack13 from "../../../Assets/images/mongodb-logo.svg";
import TechStack14 from "../../../Assets/images/dotnet-logo.svg";
import TechStack15 from "../../../Assets/images/aws-logo.svg";

function TechStack() {
  return (
    <section className="landing-tech-stack section-margin">
      <div className="container">
        <Row>
          <Col
            xl={{ span: 10, offset: 2 }}
            className="landing-tech-stack__content"
          >
            <div>
              <h2 className="section-title">Our Tech Stack</h2>
              <p className="section-desc">
                We turn ideas into user-friendly, scalable mobile apps,
                fostering rapid adoption and sustainable growth.
              </p>
            </div>
            <div className="phoenix-numbers">
              <div>
                <h2 className="section-title text-left">100+</h2>
                <p>apps delivered</p>
              </div>
              <div>
                <h2 className="section-title text-left">100+</h2>
                <p>in-house developers</p>
              </div>
              <div>
                <h2 className="section-title text-left">8+</h2>
                <p>years of experience</p>
              </div>
            </div>
          </Col>
          <Col xs={24} xl={{ span: 10, offset: 2 }}>
            <div className="tech-stack-wrap">
              <img src={TechStack1} alt="swift logo" />
              <img src={TechStack2} alt="swift logo" />
              <img src={TechStack3} alt="swift logo" />
              <img src={TechStack4} alt="swift logo" />
              <img src={TechStack5} alt="swift logo" />
              <img src={TechStack6} alt="swift logo" />
              <img src={TechStack7} alt="swift logo" />
              <img src={TechStack8} alt="swift logo" />
              <img src={TechStack9} alt="swift logo" />
              <img src={TechStack10} alt="swift logo" />
              <img src={TechStack11} alt="swift logo" />
              <img src={TechStack12} alt="swift logo" />
              <img src={TechStack13} alt="swift logo" />
              <img src={TechStack14} alt="swift logo" />
              <img src={TechStack15} alt="swift logo" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default TechStack;
