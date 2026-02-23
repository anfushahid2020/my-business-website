import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-black text-gold p-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
                Welcome to our website! We are dedicated to providing the best service possible.
                Our team is committed to excellence and we strive to exceed your expectations.
            </p>
            <p className="text-lg mt-4">
                Our mission is to deliver high-quality products and services that meet the needs of our customers.
                Thank you for visiting our site!
            </p>
        </div>
    );
};

export default About;