import React, { useRef } from "react";
import "./contact-form.scss";
import FormBg from "../../../Assets/images/web-form-img.webp";
import FormBgMobile from "../../../Assets/images/mobile-form-img.webp";
import FormBgTab from "../../../Assets/images/tab-form-img.webp";
import { Element } from "react-scroll";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

import { Col, Row } from "antd";

function ContactForm() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bayfpel",
        "template_rdgqf5e",
        form.current,
        "83T2K52v6vGxo368w"
      )
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      });
  };
  return (
    <Element id="contact-form" name="contact-form">
      <section className="landing-contact section-margin">
        <div className="container">
          {/* <img className="w-100 contact-bg" src={FormBg} alt="banner backround" /> */}

          <picture className="w-100 contact-bg">
            <source
              rel="preload"
              fetchpriority="high"
              as="image"
              type="image/webp"
              media="(min-width:1200px)"
              srcSet={FormBg}
            />
            <source
              rel="preload"
              fetchpriority="high"
              as="image"
              type="image/webp"
              media="(min-width:768px)"
              srcSet={FormBgTab}
            />
            <img
              rel="preload"
              fetchpriority="high"
              as="image"
              type="image/webp"
              className="w-100"
              src={FormBgMobile}
              alt="banner backround"
            />
          </picture>
          <div className="landing-contact__content">
            <h2 className="section-title text-color-white mb-0">
              Have an idea?
            </h2>
            <h2 className="section-title text-color-white mb-0">
              Let’s build experiences together!
            </h2>
            {/* <form ref={form} onSubmit={handleSubmit}>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="submit" value="Send" />
            </form> */}

            <form
              ref={form}
              onSubmit={handleSubmit}
              name="basic"
              autoComplete="off"
            >
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12} xl={{ span: 8, offset: 4 }}>
                  <input
                    placeholder="Full name"
                    type="text"
                    name="username"
                    required
                  />
                </Col>
                <Col xs={24} md={12} xl={{ span: 8 }}>
                  <input placeholder="Phone" type="tel" name="phone" required />
                </Col>
              </Row>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12} xl={{ span: 8, offset: 4 }}>
                  <input
                    placeholder="Company name"
                    type="text"
                    name="company"
                    required
                  />
                </Col>
                <Col xs={24} md={12} xl={{ span: 8 }}>
                  <input
                    placeholder="Service type"
                    type="text"
                    name="service"
                    required
                  />
                </Col>
              </Row>
              <div className="submit-btn">
                <button className="btn btn--white-big" type="submit">
                  Get in touch
                </button>
              </div>
            </form>

            {/* <Form
              ref={form}
              onSubmit={handleSubmit}
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12} xl={{ span: 8, offset: 4 }}>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="Full Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12} xl={{ span: 8 }}>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input placeholder="Phone" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12} xl={{ span: 8, offset: 4 }}>
                  <Form.Item
                    name="company"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Company Name!",
                      },
                    ]}
                  >
                    <Input placeholder="Company Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12} xl={{ span: 8 }}>
                  <Form.Item
                    name="service"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Service type!",
                      },
                    ]}
                  >
                    <Input placeholder="Service type" />
                  </Form.Item>
                </Col>
              </Row>
              <div className="submit-btn">
                <Form.Item className="w-100">
                  <button className="btn btn--white-big" type="submit">
                    Get in touch
                  </button>
                </Form.Item>
              </div>
            </Form> */}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default ContactForm;
