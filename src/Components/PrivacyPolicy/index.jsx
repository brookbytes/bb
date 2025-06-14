import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <br /><br /><br />
      <h1>Privacy Policy</h1>
      <p>This is the Privacy Policy page. Content will be added here.</p>
      <Link to="/" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
