import React, { useState } from 'react';
import classNames from 'classnames';

import Logo from '../images/icons/freysoft_fullcolor_logo.svg';
import Contact from '../images/icons/Contact.svg';
import MenuIcon from '../images/icons/menu_icon.svg';
import '../styles/menu.scss';

function Menu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav className="header__menu menu">
      <div className="menu__logo logo">
        <a
          href="/"
        >
          <img src={Logo} alt="Freysoft logo" />
        </a>
      </div>
      <ul className={classNames('menu__bar', { 'menu__bar--open': (showMenu) })}>
        <li className="menu__item">
          <a
            href="#company"
            className="menu__link"
            onClick={() => setShowMenu(!showMenu)}
          >
            Company
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#services"
            className="menu__link"
            onClick={() => setShowMenu(!showMenu)}
          >
            Services
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#blog"
            className="menu__link"
            onClick={() => setShowMenu(!showMenu)}
          >
            Blog
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#career"
            className="menu__link"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="menu__career">Career</span>
          </a>
        </li>
      </ul>
      <a
        href="tel:+123456789"
        className="menu__call-link"
      >
        <button
          type="button"
          className="menu__call-button-desktop"
        >
          Contact Us
        </button>
      </a>
      <div className="menu__contact-block">
        <a
          href="tel:+123456789"
          className="menu__call-link"
        >
          <img src={Contact} alt="call" />
        </a>
        <button
          type="button"
          className="menu__menu-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src={MenuIcon} alt="menu" />
        </button>
      </div>
    </nav>
  );
}

export default Menu;
