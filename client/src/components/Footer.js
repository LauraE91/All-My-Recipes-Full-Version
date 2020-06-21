import React from 'react';
import './css/footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer id="footer" className="footer">
      <div className="content has-text-centered footer-content">
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/privacyAndTerms">Privacy & Terms</Link>
        <p>&copy; 2020 Laura Ross</p>
      </div>
    </footer>
  );
}

export default Footer;
