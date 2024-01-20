import "./customers.scss";

import CustomerLogo1 from "../../../Assets/images/audi.png";
import CustomerLogo2 from "../../../Assets/images/low-6.png";
import CustomerLogo3 from "../../../Assets/images/nyc.png";
import CustomerLogo4 from "../../../Assets/images/toyota.png";
import CustomerLogo5 from "../../../Assets/images/suzuki.png";
import CustomerLogo6 from "../../../Assets/images/ford.png";
import CustomerLogo7 from "../../../Assets/images/fleet.png";
import CustomerLogo8 from "../../../Assets/images/think-us.png";
import CustomerLogo9 from "../../../Assets/images/lateral.png";
import CustomerLogo10 from "../../../Assets/images/ey.png";
import CustomerLogo11 from "../../../Assets/images/teleline.png";
import CustomerLogo12 from "../../../Assets/images/nippon.png";

function Customers() {
  return (
    <section className="landing-customers section-padding">
      <div>
        <h2 className="section-title">
          Bringing Ideas to Life for Our Customers
        </h2>
      </div>
      <div className="customer-logos-wrap">
        <div className="logos-container">
          <div className="marquee">
            <img src={CustomerLogo1} alt="Customer logo audi" />
            <img src={CustomerLogo2} alt="Customer logo low 6" />
            <img src={CustomerLogo3} alt="Customer logo nyc" />
            <img src={CustomerLogo4} alt="Customer logo toyota" />
            <img src={CustomerLogo5} alt="Customer logo suzuki" />
            <img src={CustomerLogo6} alt="Customer logo ford" />
            <img src={CustomerLogo7} alt="Customer logo fleet" />
            <img src={CustomerLogo8} alt="Customer logo think us" />
            <img src={CustomerLogo9} alt="Customer logo lateral" />
            <img src={CustomerLogo10} alt="Customer logo ey" />
            <img src={CustomerLogo11} alt="Customer logo teleline" />
            <img src={CustomerLogo12} alt="Customer logo nippon" />
            <img src={CustomerLogo1} alt="Customer logo audi" />
            <img src={CustomerLogo2} alt="Customer logo low 6" />
            <img src={CustomerLogo3} alt="Customer logo nyc" />
            <img src={CustomerLogo4} alt="Customer logo toyota" />
            <img src={CustomerLogo5} alt="Customer logo suzuki" />
            <img src={CustomerLogo6} alt="Customer logo ford" />
            <img src={CustomerLogo7} alt="Customer logo fleet" />
            <img src={CustomerLogo8} alt="Customer logo think us" />
            <img src={CustomerLogo9} alt="Customer logo lateral" />
            <img src={CustomerLogo10} alt="Customer logo ey" />
            <img src={CustomerLogo11} alt="Customer logo teleline" />
            <img src={CustomerLogo12} alt="Customer logo nippon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
