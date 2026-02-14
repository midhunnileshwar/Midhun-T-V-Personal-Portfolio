import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
    {
        title: "KITE Training Modules",
        description: "Comprehensive training modules designed for teachers in Kerala, focusing on integrating technology into the classroom.",
        tags: ["Educational Tech", "Curriculum Design", "Training"],
        link: "#",
        github: "#"
    },
    {
        title: "School Wiki Contributions",
        description: "Active contributor to the School Wiki project, documenting and sharing educational resources and school history.",
        tags: ["Content Management", "Wiki", "Education"],
        link: "#",
        github: "#"
    },
    {
        title: "YouTube Educational Series",
        description: "A series of video tutorials on various technical topics, helping students and teachers master digital tools.",
        tags: ["Video Production", "Teaching", "YouTube"],
        link: "https://youtube.com/@MidhunNileshwar",
        github: "#"
    },
    {
        title: "Mittu Animation Character",
        description: "An animation character designed for classroom activities, featured in Samagra Shiksha Kerala's 'Hello World' package.",
        tags: ["Animation", "Education", "Digital Art"],
        link: "https://www.facebook.com/share/v/19sJcJvLDe/",
        github: "#"
    },
    {
        title: "AI Teacher Ira",
        description: "An AI Teacher developed for schools, gaining significant media attention for its innovative approach to education.",
        tags: ["AI", "Innovation", "EdTech"],
        link: "https://youtu.be/ShK6hIJfCmI",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Featured Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-icon">
                                        <FaExternalLinkAlt /> View
                                    </a>
                                    {/* <a href={project.github} className="btn-icon"><FaGithub /> Code</a> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
