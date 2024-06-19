import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false); // Track sending status


  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent duplicate clicks while sending
    if (isSending) {
      return;
    }

    // Set "Sending" text on button
    setIsSending(true);

    // Replace these values with your own EmailJS service and template IDs
    const serviceID = 'service_aqazec7';  
    const templateID = 'template_z2j0yk3';
    const userID = 'aElTxKVTKqzP8vcil';

    emailjs
      .send(serviceID, templateID, {
        to_name: 'Sri Chanakya Yennana',
        from_name: formData.name,
        message: "Email : "+ formData.email+ " \n " +formData.message ,
        reply_to: formData.email,
      }, userID)
      .then((response) => {
        toast.success("Mail sent to Sri Chanakya Yennana");
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        toast.error("Oops!!! Something went wrong. Try again later.");
        console.error('Failed to send email:', error);
      })
      .finally(() => {
        // Clear the form and reset the button text after sending attempt
        setIsSending(false);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      });
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="form-container"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref} id="contact"
    >
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required='required' />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required='required' />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required='required'></textarea>
        </div>
        <button id="sendBtn" type="submit" className={isSending ? "btn-sending" : "btn-primary"} disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
