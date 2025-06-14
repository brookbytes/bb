import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <br /><br /><br />
      <h1>Terms and Conditions</h1>
      <p>This is the Terms and Conditions page. Content will be added here.</p>
      <Link to="/" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default TermsAndConditions;
