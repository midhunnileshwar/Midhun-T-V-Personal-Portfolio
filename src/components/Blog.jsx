import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/Blog.css';

const blogPosts = [
    {
        title: "Integrating AI in Classroom Learning",
        date: "October 10, 2025",
        excerpt: "Exploring how Artificial Intelligence can personalize learning experiences for students...",
        link: "#"
    },
    {
        title: "The Joy of Animation: Creating 'Mittu'",
        date: "September 01, 2025",
        excerpt: "Behind the scenes of creating the beloved animation character 'Mittu' for educational content...",
        link: "#"
    },
    {
        title: "Effective Digital Tools for Teachers",
        date: "August 20, 2025",
        excerpt: "A curated list of digital tools that can enhance teaching efficiency and student engagement...",
        link: "#"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="section blog">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Latest Blogs</h2>
                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            className="blog-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <a href={post.link} className="read-more">
                                    Read More <FaArrowRight />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
