import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaCode, FaVideo, FaLaptopCode, FaUserTie, FaBullhorn, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import '../styles/Skills.css';

const skillsData = [
    {
        icon: <FaUserTie />,
        title: "State Resource Person",
        description: "Core State Resource Person in English for SCERT Kerala, Resource Person for SSK Kerala , KITE Kerala, and DCE Kasaragod."
    },
    {
        icon: <FaChalkboardTeacher />,
        title: "KITE Master Trainer",
        description: "Master Trainer at KITE, conducting ICT training, coding projects, and awareness classes for teachers, students, and parents."
    },
    {
        icon: <FaBullhorn />,
        title: "English Camps",
        description: "Conducted English camps for students from Std 1 to Higher Secondary across Kerala and in Karnataka."
    },
    {
        icon: <FaLaptopCode />,
        title: "EdTech & Coding",
        description: "Expert in Educational Technology, delivering technical training on software, hardware, and coding."
    },
    {
        icon: <FaVideo />,
        title: "Content Creation",
        description: "Creator of 'Mittu' and 'AI Teacher Ira'. Documenting classroom innovations through public educational videos."
    },
    {
        icon: <FaGraduationCap />,
        title: "Professional Development",
        description: "Participated in national-level workshops and completed international courses on classroom pedagogy."
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
