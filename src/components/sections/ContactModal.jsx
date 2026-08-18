import React from "react";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="contact-modal-backdrop" onClick={handleBackdropClick}>
      <div className="contact-modal">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <h2>Get In Touch</h2>
        <p className="modal-description">Let’s package the right CDSA solution for your programme or business.
          Reach out for capability statements, advisory packages, digital enablement pilots delivery partnerships.
        </p>

        <form action="https://formspree.io/f/mrbynzaq" method="POST" className="contact-form">
          <div className="form-group">
            <label htmlFor="modal-name">Full Name</label>
            <input 
              type="text" 
              id="modal-name" 
              name="name" 
              placeholder="Full Name" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-phone">Phone</label>
            <input 
              type="tel" 
              id="modal-phone" 
              name="phone" 
              placeholder="Phone" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-email">Email</label>
            <input 
              type="email" 
              id="modal-email" 
              name="email" 
              placeholder="Email" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-message">Message</label>
            <textarea 
              id="modal-message" 
              name="message" 
              placeholder="Message" 
              rows="4" 
              required 
            ></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
