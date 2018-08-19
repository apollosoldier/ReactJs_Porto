import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
      <img src={logo} width="100" height="100" alt="GitHub"/><div style={{ color: textPrimary }}>Made by <a href="https://github.com/apollosoldier" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>PandaMachine</a> <span role="img" aria-label="heart">❤️</span></div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;
