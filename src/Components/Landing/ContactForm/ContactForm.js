import "./contact-form.scss";
import FormBg from "../../../Assets/images/web-form-img.webp";
import FormBgMobile from "../../../Assets/images/mobile-form-img.webp";
import FormBgTab from "../../../Assets/images/tab-form-img.webp";
import { Element } from "react-scroll";

import React from "react";
import { Col, Form, Input, Row } from "antd";

function ContactForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
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
                    name="Company Name"
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
                    name="Service type"
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
                  <button className="btn btn--white-big" htmltype="submit">
                    Get in touch
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default ContactForm;
