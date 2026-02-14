import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram, FaFacebook, FaYoutube, FaSchool, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            document.getElementById("contact-form").reset();
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Get In Touch</h2>
                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Let's Talk</h3>
                        <p>I'm open to discussing web development projects, creative opportunities, or mentorship.</p>

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
                                <a href="https://schoolwiki.in/%E0%B4%89%E0%B4%AA%E0%B4%AF%E0%B5%8B%E0%B4%97%E0%B5%8D%E0%B4%A4%E0%B4%BE%E0%B4%B5%E0%B5%8D:Midhunnileshwar" target="_blank" rel="noopener noreferrer" className="social-link" title="School Wiki"><FaSchool /></a>
                                <a href="https://wa.me/918893488414" target="_blank" rel="noopener noreferrer" className="social-link whatsapp" title="WhatsApp"><FaWhatsapp /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={() => { if (submitted) { alert("Message Sent Successfully!"); } }}></iframe>
                        <form
                            className="contact-form"
                            id="contact-form"
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeB31DTr1mhN9jWQnNdX4LuDbF-_qC6s6nf9xUk1H6RYVX7tA/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <input type="text" name="entry.432302043" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="entry.100261048" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="entry.111469514" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
