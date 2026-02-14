import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Events.css';

const eventsData = [
    {
        title: "Creative Writing & AI Workshop: JNV Coorg",
        date: "09 December 2025",
        location: "PM SHRI Jawahar Navodaya Vidyalaya, Kodagu, Karnataka",
        description: 'Following the success of the previous engagement, this second-year workshop was designed to push the boundaries of creative expression for students. The program blended traditional storytelling techniques with cutting-edge AI-assisted creative workflows.'
    },
    {
        title: "State of the Map Kerala 2025",
        date: "15 – 16 November 2025",
        location: "Kannur University (Swami Anandatheertha Campus, Payyannur) Kannur, Kerala",
        description: "The 2nd edition of State of the Map Kerala (and the 4th Kerala OSM Community Meetup) brought together mappers, GIS professionals, and open-data enthusiasts. Hosted at the Swami Anandatheertha Campus, the conference focused on leveraging OpenStreetMap (OSM) for community resilience, disaster management, and local governance."
    },
    {
        title: "State Level ICT Workshop",
        date: "August 05, 2025",
        location: "Thiruvananthapuram",
        description: "Participated as a resource person in the state-level workshop for curriculum revision."
    },
    {
        title: "English Immersion Camp 2025",
        date: "23 April 2025",
        location: "G.V.H.S.S. Ambalathara , Kasargod",
        description: 'A specialized, activity-based English language camp designed for primary school students (Classes 2, 3, and 4). The initiative focused on breaking the language barrier through "Learning by Doing"—moving away from traditional textbooks toward interactive, performance-based education.'
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
