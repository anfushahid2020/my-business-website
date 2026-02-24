import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '48px 24px', background: '#FFFFFF', borderRadius: 12, boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, color: '#003366', marginBottom: 24, letterSpacing: '0.02em', textAlign: 'center' }}>
        About Us
      </h1>
      <p style={{ fontSize: 20, color: '#333333', marginBottom: 24, textAlign: 'center' }}>
        Our mission is to make education delivery easy, accessible, and truly empowering for everyone. We believe that technology can break barriers and open new doors for students and educational institutes worldwide.
      </p>
      <p style={{ fontSize: 18, color: '#333333', marginBottom: 20, textAlign: 'center' }}>
        We design and build smart web applications—gadgets that make learning simple and effective. From interactive quiz tests to self-management tools, timetables, and more, our solutions are crafted to help students learn better and institutions teach smarter.
      </p>
      <p style={{ fontSize: 18, color: '#333333', marginBottom: 32, textAlign: 'center' }}>
        Our vision is to facilitate a world where every learner and educator has access to the best digital tools for growth and success.
      </p>
      <div style={{ marginTop: 40, textAlign: 'center' }}>
          <img
          src="/Founder.png"
          alt="Founder"
          style={{
            width: 140,
            height: 140,
            objectFit: 'cover',
            borderRadius: '50%',
            boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
            border: '4px solid #ffffff',
            margin: '0 auto 16px',
            background: '#ffffff'
          }}
        />
        <p style={{ fontSize: 16, color: '#333333', marginBottom: 8 }}>
          Meet the founder — passionate about making education accessible and effective for all.
        </p>
      </div>
    </div>
  );
};

export default About;
