import React from "react";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="section section-muted" id="contact">
      <Container>
        <SectionTitle 
          eyebrow="Contact" 
          title="Let’s package the right CDSA solution for your programme or business." 
          description="Reach out for capability statements, advisory packages, digital enablement pilots, AgriScan discussions or GovTech delivery partnerships." 
        />
        <div className="grid grid-2">
          {/* Company Details Card */}
          <Card>
            <h3>CDSA — Cross Domain Solution Architect</h3>
            <p>Email: info@vcdsa.co.za</p>
            <p>Phone: +27 6 91 424 153</p>
            <p>Location: Johannesburg, South Africa</p>
            
            <h3 style={{ marginTop: "1.5rem" }}>Best-fit requests</h3>
            <ul className="contact-list">
              <li>SMME advisory and digital enablement</li>
              <li>Government programme implementation</li>
              <li>AI/data dashboards and monitoring systems</li>
              <li>Innovation partnerships</li>
            </ul>
          </Card>

          {/* Formspree Form Card */}
          <Card>
            <h3>Get In Touch</h3>
            <form action="https://formspree.io" method="POST" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Full Name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Phone" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Message" 
                  rows="4" 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">Submit</button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
