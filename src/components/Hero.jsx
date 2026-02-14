import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg-elements">
                <div className="glow-circle circle-1"></div>
                <div className="glow-circle circle-2"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-img-container">
                        <img src={profileImg} alt="Midhun T V" className="hero-profile-img" />
                    </div>
                    <h2 className="greeting">Hello, I'm</h2>
                    <h1 className="name text-gradient">Midhun T V</h1>
                    <h3 className="role">Master Trainer at KITE <br /> Teacher at St. Ann's A U P School Nileshwar</h3>

                    <div className="hero-skills">
                        <span>Training</span>
                        <span className="dot">•</span>
                        <span>Coding</span>
                        <span className="dot">•</span>
                        <span>Animation</span>
                        <span className="dot">•</span>
                        <span>Designing</span>
                    </div>

                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
