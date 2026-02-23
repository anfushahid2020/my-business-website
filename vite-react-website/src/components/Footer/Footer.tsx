import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p style={{ color: '#D4AF37' }}>© 2023 Your Company. All rights reserved.</p>
                <p style={{ color: '#D4AF37' }}>Contact us: info@yourcompany.com</p>
            </div>
        </footer>
    );
};

export default Footer;