import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  );
};
function ContactForm({ props }) {
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3qq4zuo",
        "template_j93jbyh",
        e.target,
        "Mcz2oOBmr4qCnpmX5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="">
          <div className=" order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">Hire me.</h2>
              <p className="description">
                I am available for a developer work postion. Connect with me via
                phone: <a href="tel:+447449557354">07449557354</a> or email:
                <a href="mailto:jaysinghh311@gmail.com">
                  {" "}
                  jaysinghh311@gmail.com
                </a>{" "}
              </p>
            </div>
            <div className="form-wrapper">
              <form action="" onSubmit={sendEmail}>
                <div className="rn-form-group">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="rn-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="rn-form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="rn-form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="rn-form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div className="rn-form-group">
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit Now
                  </button>
                </div>

                <div className="rn-form-group">
                  {result ? <Result /> : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
