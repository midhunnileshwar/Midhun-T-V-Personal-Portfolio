import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="copyright">
                    © {new Date().getFullYear()} Midhun T V. All rights reserved.
                </p>
                <p className="credit">
                    Designed & Built with <span className="heart">❤</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
