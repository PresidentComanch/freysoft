import React from 'react';
import Menu from './Menu';
import '../styles/header.scss';
import '../styles/grid.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Menu />
      </div>
      <div className="header__content">
        <div className="container">
          <article className="header__info">
            <h1 className="header__title">
              We’ve got the job for you
              <span className="header__title-exclamation">!</span>
            </h1>
            <p className="header__text">
              We offer experienced IT specialists to be involved in ground-breaking
              digital projects and IT novices to develop skills in our
              perspective workplace.
            </p>
          </article>
        </div>
        <div className="header__gallery-wrapper">
          <div className="header__gallery grid">
            <div className="header__gallery-item header__gallery-item--1 grid__item--row1-1-col1-3" />
            <div className="header__gallery-item header__gallery-item--2 grid__item--row1-1-col4-6" />
            <div className="header__gallery-item header__gallery-item--3 grid__item--row1-1-col7-9" />
            <div className="header__gallery-item header__gallery-item--4 grid__item--row1-1-col10-12" />
            <div className="header__gallery-item header__gallery-item--5 grid__item--row1-1-col13-15" />
            <div className="header__gallery-item header__gallery-item--6 grid__item--row1-1-col16-18" />
            <div className="header__gallery-item header__gallery-item--7 grid__item--row2-2-col2-4" />
            <div className="header__gallery-item header__gallery-item--8 grid__item--row2-2-col5-7" />
            <div className="header__gallery-item header__gallery-item--9 grid__item--row2-2-col8-10">
              <a href="#open-vacancies" className="header__see-all-link">
                See All Roles
              </a>
            </div>
            <div className="header__gallery-item header__gallery-item--10 grid__item--row2-2-col11-13" />
            <div className="header__gallery-item header__gallery-item--11 grid__item--row2-2-col14-16" />
            <div className="header__gallery-item header__gallery-item--12 grid__item--row2-2-col17-19" />
            <div className="header__gallery-item header__gallery-item--13 grid__item--row3-3-col1-3" />
            <div className="header__gallery-item header__gallery-item--14 grid__item--row3-3-col4-6" />
            <div className="header__gallery-item header__gallery-item--15 grid__item--row3-3-col7-9" />
            <div className="header__gallery-item header__gallery-item--16 grid__item--row3-3-col10-12" />
            <div className="header__gallery-item header__gallery-item--17 grid__item--row3-3-col13-15" />
            <div className="header__gallery-item header__gallery-item--18 grid__item--row3-3-col16-18" />
          </div>
        </div>
      </div>
      <a href="#open-vacancies" className="header__see-all-button">
        <button
          type="button"
          className="header__see-all-mobile-button"
        >
          See All Roles
        </button>
      </a>
    </header>
  );
}

export default Header;
