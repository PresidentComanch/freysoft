import React from 'react';
import FacebookLogo from '../images/icons/facebook_ic.svg';
import LinkedInLogo from '../images/icons/linkedin_ic.svg';
import TwitterLogo from '../images/icons/twitter_ic.svg';

import '../styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <span className="footer__copyright">
            © 2018-2021 FREYSOFT. All rights reserved
          </span>
          <div className="footer__info-links" id="footer__info-links">
            <a
              href="#footer__info-links"
              className="footer__info-link"
            >
              Terms of Use
            </a>
            <a
              href="#footer__info-links"
              className="footer__info-link"
            >
              Privacy policy
            </a>
            <a
              href="#footer__info-links"
              className="footer__info-link"
            >
              Site Map
            </a>
          </div>
          <div className="footer__media-bar">
            <div className="footer__media-bar-link-container">
              <a
                href="https://www.facebook.com/freysoft"
                className="footer__media-bar-link"
                target="_blank"
                rel="noreferrer"
                title="Freysoft facebook page"
              >
                <img
                  className="footer__media-logo"
                  src={FacebookLogo}
                  alt="facebook"
                />
              </a>
            </div>
            <div className="footer__media-bar-link-container">
              <a
                href="https://www.linkedin.com/company/frey-soft/"
                className="footer__media-bar-link"
                target="_blank"
                rel="noreferrer"
                title="Freysoft linkedin page"
              >
                <img
                  className="footer__media-logo"
                  src={LinkedInLogo}
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="footer__media-bar-link-container">
              <a
                href="https://twitter.com/FreySoftInc"
                className="footer__media-bar-link"
                target="_blank"
                rel="noreferrer"
                title="Freysoft twitter page"
              >
                <img
                  className="footer__media-logo"
                  src={TwitterLogo}
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
