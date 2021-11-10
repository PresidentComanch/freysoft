import React, { useState } from 'react';
import classNames from 'classnames';

import perks from '../api/perks.json';

import '../styles/addvantages.scss';

import YoungMotTeam from '../images/icons/y_mot_team.svg';
import IntClients from '../images/icons/int_clients.svg';
import FavWorkProc from '../images/icons/fav_work_proc.svg';
import StProjOfMultInd from '../images/icons/stim_proj.svg';
import WorkRemotOrOff from '../images/icons/work_remote.svg';
import NotAllAbWork from '../images/icons/not_all_ab_work.svg';

type Perk = {
  title: string;
  description: string;
}

const Addvantages: React.FC = () => {
  const perkImages = [
    YoungMotTeam,
    IntClients,
    FavWorkProc,
    StProjOfMultInd,
    WorkRemotOrOff,
    NotAllAbWork,
  ];
  const buttons = [0, 1, 2, 3, 4, 5];
  const [translateValue, setTranslateValue] = useState(0);

  const translateHandler = (event: { target: { value: string | number; }; }) => {
    setTranslateValue(+event.target.value);
  };

  return (
    <section className="addvantages">
      <div className="container">
        <h2 className="addvantages__title">
          Our superb perks
        </h2>
      </div>
      <div className="addvantages__wrapper">
        <ul className="addvantages__list" style={{ transform: `translateX(-${translateValue * 290}px)` }}>
          {perks.map((
            perk: Perk,
            perkIndex: number,
          ) => {
            const { title, description } = perk;

            return (
              <li className="addvantages__item" key={title}>
                <img src={perkImages[perkIndex]} className="addvantages__img" alt={title} />
                <div className="addvantages__perk-title-container">
                  <h3 className="addvantages__perk-title">
                    {title}
                  </h3>
                </div>
                <p className="addvantages__perk-description">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container">
        <div
          className="addvantages__controll-bar"
        >
          {buttons.map((button) => (
            <label
              className={classNames(
                'addvantages__control-radio-label',
                { 'addvantages__control-radio-label--active': translateValue === button },
              )}
              htmlFor={`radio${button}`}
              key={button}
            >
              <input
                id={`radio${button}`}
                type="radio"
                className="addvantages__control-radio"
                name="transform-translate-radio"
                value={button}
                onChange={translateHandler}
              />
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Addvantages;
