import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Events.css';

const eventsData = [
    {
        title: "KITE Master Training Program",
        date: "October 15, 2025",
        location: "KITE District Centre, Kasaragod",
        description: "Led a comprehensive training session on AI tools for education for high school teachers."
    },
    {
        title: "Little KITEs Camp",
        date: "September 20, 2025",
        location: "St. Ann's A U P School",
        description: "Organized a two-day residential camp for Little KITEs members focusing on robotics and coding."
    },
    {
        title: "State Level ICT Workshop",
        date: "August 05, 2025",
        location: "Thiruvananthapuram",
        description: "Participated as a resource person in the state-level workshop for curriculum revision."
    }
];

const Events = () => {
    return (
        <section id="events" className="section events">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Events & Training</h2>
                <div className="events-grid">
                    {eventsData.map((event, index) => (
                        <motion.div
                            className="event-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="event-date">
                                <FaCalendarAlt /> <span>{event.date}</span>
                            </div>
                            <h3 className="event-title">{event.title}</h3>
                            <div className="event-location">
                                <FaMapMarkerAlt /> <span>{event.location}</span>
                            </div>
                            <p className="event-description">{event.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
