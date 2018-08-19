import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import BrowserNotes from '@components/BrowserNotes';
import logo from '../../logo.svg';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="row">
        <div className="logo">
          <img src={logo} width="200" height="100" />
        </div><p> ReactJs App</p>
      </div>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I am Mohamed aka "Gentil Panda" !</div>
          <div className="tagline">
            (Full Stack Dev | DataTronics | Artificial Intelligence | Uav Drones) Enthusiast 
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;