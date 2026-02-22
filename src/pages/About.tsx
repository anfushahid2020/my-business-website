import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: '48px 24px', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(229, 184, 11, 0.08)' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, color: '#E5B80B', marginBottom: 24, letterSpacing: '0.02em', textAlign: 'center' }}>
        About Us
      </h1>
      <p style={{ fontSize: 20, color: '#b3860b', marginBottom: 24, textAlign: 'center' }}>
        Our mission is to make education delivery easy, accessible, and truly empowering for everyone. We believe that technology can break barriers and open new doors for students and educational institutes worldwide.
      </p>
      <p style={{ fontSize: 18, color: '#b3860b', marginBottom: 20, textAlign: 'center' }}>
        We design and build smart web applications—gadgets that make learning simple and effective. From interactive quiz tests to self-management tools, timetables, and more, our solutions are crafted to help students learn better and institutions teach smarter.
      </p>
      <p style={{ fontSize: 18, color: '#b3860b', marginBottom: 32, textAlign: 'center' }}>
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
            boxShadow: '0 4px 24px rgba(229, 184, 11, 0.12)',
            border: '4px solid #fff',
            margin: '0 auto 16px',
            background: '#fff'
          }}
        />
        <p style={{ fontSize: 16, color: '#b3860b', marginBottom: 8 }}>
          Meet the founder — passionate about making education accessible and effective for all.
        </p>
      </div>
    </div>
  );
};

export default About;
