import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>My Website</h1>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/" className={styles.link}>Home</a></li>
                    <li><a href="/about" className={styles.link}>About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;