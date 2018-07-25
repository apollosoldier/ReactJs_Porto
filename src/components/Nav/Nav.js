import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';
import cv from '../files/cv2018.pdf';
import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha },
      switchTheme
    } = this.context;

    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: navAlpha, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };
    return (
      <nav
        className={stickyClass}
        ref={(elem) => {
          this.nav = elem;
        }}
        style={stickyStyles}
      >
        <div className="magic-wand bounce-xy" onClick={(e) => switchTheme()}>
          <button className="fas fa-magic fa-lg" href="#" />
          <div className="magic-text">Run Panda_Colors</div>
        </div>
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid ${colorPrimary};
            }
          `}
        </style>
        <div className="menu">
          <div
            className="menu__item active"
            onClick={(e) => this.scrollToPage('.about-page')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={(e) => this.scrollToPage('.portfolio-page')}
          >
            Portfolio
          </div>
          <div className="menu__item">
            <a href="https://github.com/apollosoldier" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Blog</a>
          </div>
          <div className="menu__item">
            <a href="https://github.com/apollosoldier" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Articles</a>
          </div>
          <div className="menu__item">
            <a href="https://github.com/apollosoldier" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Travels</a>
          </div>
          <div
            className="menu__item"
            onClick={(e) => this.scrollToPage('.portfolio-page')}
          >
            Projects
          </div>
          <div className="menu__item">
            <a href="logo.pdf" download>Download my Resume</a>
          </div>
        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;
