import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaCode, FaVideo, FaLaptopCode } from 'react-icons/fa';
import '../styles/Skills.css';

const skillsData = [
    {
        icon: <FaChalkboardTeacher />,
        title: "Educational Technology",
        description: "Expert in integrating ICT in education, training teachers on digital tools and platforms (KITE)."
    },
    {
        icon: <FaCode />,
        title: "Web Development",
        description: "Proficient in building modern, responsive websites using React, HTML/CSS, and JavaScript."
    },
    {
        icon: <FaVideo />,
        title: "Content Creation",
        description: "Creating engaging educational videos and tutorials for YouTube and social media."
    },
    {
        icon: <FaLaptopCode />,
        title: "Technical Training",
        description: "delivering hands-on training sessions for students and faculty on various software and hardware."
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Skills & Expertise</h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            className="skill-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
