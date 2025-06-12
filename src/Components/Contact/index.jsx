import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { contactOptions } from '../../sources';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [popup, setPopup] = useState({ show: false, success: true, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const time = new Date().toLocaleString();

    const templateParams = {
      from_name: `${formData.firstname} ${formData.lastname}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: time,
    };

    emailjs
      .send(
        'service_7bjb1f9',
        'template_8dx6hag',
        templateParams,
        'XB8sIzg0AM8WlwRFQ'
      )
      .then(
        () => {
          setPopup({ show: true, success: true, message: 'Message sent successfully!' });
        },
        (error) => {
          console.error(error);
          setPopup({ show: true, success: false, message: 'Failed to send message. Try again later.' });
        }
      );
  };

  return (
    <section id='contact' data-aos='fade-zoom-in'>
      <div className="wrapper">
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <div className="flex-center option" data-aos="fade-right" key={index}>
              <div className="flex-center icon-wrapper">{option.icon}</div>
              <h4 className="muted">{option.title}</h4>
              <h3 className="value">{option.value}</h3>
            </div>
          ))}
        </div>

        <div className="contact-form" data-aos="fade-left">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Let's Collaborate!</span>
            </h1>
            <p className="muted">
              We Always open to new opportunities and collaborations, We invite you to connect with us for
              any inquiries or project discussions.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="middle">
              <div className="flex row">
                <input type="text" placeholder="First name" name="firstname" className="control" required onChange={handleChange} />
                <input type="text" placeholder="Last name" name="lastname" className="control" required onChange={handleChange} />
              </div>
              <div className="flex row">
                <input type="email" placeholder="Email address" name="email" className="control" required onChange={handleChange} />
                <input type="tel" placeholder="Phone number" name="phone" className="control" onChange={handleChange} />
              </div>
              <textarea name="message" cols={30} rows={10} placeholder="Message" className="control" required onChange={handleChange}></textarea>
            </div>
            <div className="flex-center bottom">
              <button type="submit" className="btn primary">Send Now</button>
            </div>
          </form>
        </div>
      </div>

      {popup.show && (
        <div className={`popup ${popup.success ? 'success' : 'error'}`}>
          <p>{popup.message}</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
