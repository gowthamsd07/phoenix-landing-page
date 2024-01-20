import { Col, Row } from "antd";
import "./words-on-street.scss";
import AOS from "aos";

import TickIcon from "../../../Assets/images/tick.svg";
import NycAppImg from "../../../Assets/images/nyc-app.webp";
import NipponApp from "../../../Assets/images/nippon-app.webp";
import AudiApp from "../../../Assets/images/audi-app.webp";
import Audit from "../../../Assets/images/audit.webp";
import { useEffect } from "react";

function WordsOnStreet() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <section className="landing-words section-margin">
      <div className="container">
        <h2 className="section-title">Word on the Street</h2>
        <p className="section-desc">
          Don't be left behind in this new digital age. We can make your
          business mobile by building a personalized application for iOS and
          Android, taking into account your needs and objectives.
        </p>
        <div className="apps-wrap">
          <Row>
            <Col xl={12} className="content-col">
              <div>
                <h3>NYC Limousine Cab App </h3>
                <p>
                  NYC Limousine is one of the leading luxury taxi service
                  provider in USA
                </p>
                <ul>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Discount Management </p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Vehicle Tracking </p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Dynamic rates and loyalty system </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={12} className="img-col">
              <img
                rel="preload"
                fetchpriority="high"
                as="image"
                type="image/webp"
                data-aos="fade-left"
                data-aos-offset="250"
                data-aos-duration="700"
                className="w-100"
                src={NycAppImg}
                alt="NYC Limousine Cab App "
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ order: 2 }}
              xl={{ span: 12, order: 1 }}
              className="img-col"
            >
              <img
                rel="preload"
                fetchpriority="high"
                as="image"
                type="image/webp"
                data-aos="fade-right"
                data-aos-offset="250"
                data-aos-duration="700"
                className="w-100"
                src={NipponApp}
                alt="Nippon Paint Gamification and Engagement Platform "
              />
            </Col>
            <Col
              xs={{ order: 1 }}
              xl={{ span: 12, order: 2 }}
              className="content-col"
            >
              <div>
                <h3>Nippon Paint Gamification and Engagement Platform</h3>
                <p>
                  The primary customers were mechanics who purchased the paint.
                  These mechanics also served as influencers for the end
                  customers, further emphasising the importance of their loyalty
                  and engagement.
                </p>
                <ul>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Points accumulation on paint purchases</p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>
                      Flexibility to save and redeem points at their convenience
                    </p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Direct monetary value for each point redeemed</p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>
                      Enhanced customer service and support through employee
                      engagement
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12} className="content-col">
              <div>
                <h3>Audi - Partner-based Loyalty Program</h3>
                <p>
                  Built to reward Audi customers for their continued support by
                  offering exclusive benefits, discounts, and personalised
                  experiences through partnerships with various other brands.
                </p>

                <ul>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Partner onboarding and Management </p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Audi ecommerce platform </p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Reward and Redemption Management </p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Customer feedback Management </p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Inbuilt ticketing Management system </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={12} className="img-col">
              <img
                rel="preload"
                fetchpriority="high"
                as="image"
                type="image/webp"
                data-aos="fade-left"
                data-aos-offset="250"
                data-aos-duration="700"
                className="w-100"
                src={AudiApp}
                alt="Audi - Partner-based Loyalty Program"
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ order: 2 }}
              xl={{ span: 12, order: 1 }}
              className="img-col"
            >
              <img
                rel="preload"
                fetchpriority="high"
                as="image"
                type="image/webp"
                data-aos="fade-right"
                data-aos-offset="250"
                data-aos-duration="700"
                className="w-100"
                src={Audit}
                alt="Audit apps- Make your Audit Process Easy"
              />
            </Col>
            <Col
              xs={{ order: 1 }}
              xl={{ span: 12, order: 2 }}
              className="content-col"
            >
              <div>
                <h3>Audit apps- Make your Audit Process Easy</h3>
                <p>
                  A Mobile Application for the auditors to perform process
                  audits efficiently.
                </p>
                <ul>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>
                      Build Custom Check list and capture real time evidences
                    </p>
                  </li>
                  <li>
                    <img src={TickIcon} alt="tick" />
                    <p>Complete reporting and Dashboarding</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default WordsOnStreet;
