import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaTools, FaYoutube, FaCodeBranch } from 'react-icons/fa';
import '../styles/Services.css';

const servicesData = [
    {
        icon: <FaUserGraduate />,
        title: "Teacher Training",
        description: "Empowering educators with digital skills and modern teaching methodologies through KITE programs."
    },
    {
        icon: <FaTools />,
        title: "Workshops",
        description: "Conducting hands-on workshops on educational software, hardware, and ICT integration."
    },
    {
        icon: <FaYoutube />,
        title: "Digital Content",
        description: "Producing high-quality educational video content and tutorials for widespread learning."
    },
    {
        icon: <FaCodeBranch />,
        title: "Tech Mentorship",
        description: "Guiding students and peers in web technologies, coding, and digital creativity."
    }
];

const Services = () => {
    return (
        <section id="services" className="section services">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Services</h2>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
