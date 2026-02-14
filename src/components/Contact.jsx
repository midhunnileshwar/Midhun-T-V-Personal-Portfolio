import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram, FaFacebook, FaYoutube, FaSchool, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-gradient">Get In Touch</h2>
                    <p>Have a project in mind or want to discuss educational technology? Feel free to reach out!</p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <FaEnvelope className="icon" />
                            <span>midhunnileshwar@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <FaPhone className="icon" />
                            <span>+91 88934 88414</span>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt className="icon" />
                            <span>Nileshwar, Kasaragod, Kerala</span>
                        </div>
                    </div>

                    <div className="social-connect">
                        <h3>Connect with me</h3>
                        <div className="social-icons">
                            <a href="https://youtube.com/@MidhunNileshwar" target="_blank" rel="noopener noreferrer" className="social-link"><FaYoutube /></a>
                            <a href="https://www.instagram.com/midhun_nileshwar?igsh=Mnh4N3E4MmdtYTF5" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
                            <a href="https://www.facebook.com/share/181adUrpjS/" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook /></a>
                            <a href="https://schoolwiki.in/%E0%B4%89%E0%B4%AA%E0%B4%AF%E0%B5%8B%E0%B4%95%E0%B5%8D%E0%B4%A4%E0%B4%BE%E0%B4%B5%E0%B5%8D:Midhunnileshwar" target="_blank" rel="noopener noreferrer" className="social-link" title="School Wiki"><FaSchool /></a>
                            <a href="https://wa.me/918893488414" target="_blank" rel="noopener noreferrer" className="social-link whatsapp" title="WhatsApp"><FaWhatsapp /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
