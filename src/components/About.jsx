import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="about-img-container">
                        <img src={profileImg} alt="Midhun T V" className="profile-img" />
                    </div>
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="section-title text-gradient">About Me</h2>
                    <p className="about-bio">
                        I am a dedicated educator and technology enthusiast with over <strong>9 years of experience</strong> as a teacher trainer.
                        Currently serving as a <strong>Master Trainer at KITE</strong> and a <strong>Teacher at St. Ann's A U P School Nileshwar</strong>.
                    </p>
                    <p className="about-bio">
                        As a <strong>State Resource Group member</strong> of SCERT, SSK, DCE, DIET, and KITE, I have led numerous training programs for teachers.
                        My contributions include presenting English classes on the <strong>Victers Channel "First Bell"</strong> program and winning awards in ICT resource material competitions at sub-district and district levels.
                    </p>
                    <p className="about-bio">
                        My passion lies in empowering students and teachers through technology, known for creating the <strong>"Mittu" animation character</strong> and <strong>"AI Teacher Ira"</strong>.
                    </p>

                    <div className="social-links">
                        <a href="https://youtube.com/@MidhunNileshwar" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                            <FaYoutube />
                        </a>
                        <a href="https://www.instagram.com/midhun_nileshwar?igsh=Mnh4N3E4MmdtYTF5" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/share/181adUrpjS/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                            <FaFacebook />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
