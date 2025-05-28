import React from "react";
import "./About.css";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="about-container">

      <div className="about-section">
        <div className="about-image">
          <img src={assets.about_image} alt="Doctors" />
        </div>

        <div className="about-text">
          <h2>ABOUT <strong>US</strong></h2>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Prescripto, we understand the challenges individuals face
            when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to
            enhance our platform, integrating the latest advancements to improve user experience and
            deliver superior service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <h5><strong>Our Vision</strong></h5>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user.
            We aim to bridge the gap between patients and healthcare providers, making it easier for
            you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="why-choose">
        <h3>WHY <strong>CHOOSE US</strong></h3>
        <div className="why-cards">
          <div className="card">
            <h6><strong>EFFICIENCY:</strong></h6>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="card">
            <h6><strong>CONVENIENCE:</strong></h6>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="card">
            <h6><strong>PERSONALIZATION:</strong></h6>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
