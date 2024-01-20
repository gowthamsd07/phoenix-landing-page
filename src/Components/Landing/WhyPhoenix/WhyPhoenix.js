import { Col, Row } from "antd";
import "./why-phoenix.scss";

import Quality from "../../../Assets/images/quallity-driven-approach.svg";
import Agile from "../../../Assets/images/agile-development.svg";
import Global from "../../../Assets/images/global-reach.svg";
import Technical from "../../../Assets/images/technical-superiority.svg";
import Cusotm from "../../../Assets/images/custom-solutions.svg";
import Teams from "../../../Assets/images/dedicated-teams.svg";

function WhyPhoenix() {
  return (
    <section className="landing-why-phoenix section-padding">
      <div className="container">
        <h2 className="section-title">Why Choose Phoenix Tech Labs?</h2>
        <Row className="landing-why-phoenix__wrap" gutter={[24, 60]}>
          <Col xs={24} md={12} xl={8}>
            <div>
              <img src={Quality} alt="Quallity Driven Approach" />
              <h4>Quallity Driven Approach</h4>
              <p>
                We believe in quality and ensure that our solutions and services
                help you achieve your goals with best quality and timely
                delivery.
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <div>
              <img src={Agile} alt="Agile Development" />
              <h4>Agile Development</h4>
              <p>
                We work with AGILE methodology and believe in developing the
                project on the go to get real time feedback and usage stats. 
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <div>
              <img src={Global} alt="Global Reach" />
              <h4>Global Reach</h4>
              <p>
                We have served clients from across the world and are easily
                accessible to the global clientele
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <div>
              <img src={Technical} alt="Technical Superiority" />
              <h4>Technical Superiority</h4>
              <p>
                With multiple years of experience in custom software
                development, we have immense industry experience and technical
                superiority to create the best solutions for you.
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <div>
              <img src={Cusotm} alt="Custom Solutions" />
              <h4>Custom Solutions</h4>
              <p>
                We work with your concept to visualize, strategize and bring
                ideas to life with custom solutions designed just for you.
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <div>
              <img src={Teams} alt="Dedicated Teams" />
              <h4>Dedicated Teams</h4>
              <p>
                We have 24*7 teams working in India and UK working  with clients
                across enterprise and startup domain
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default WhyPhoenix;
