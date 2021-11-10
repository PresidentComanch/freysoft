import React from 'react';
import About from './About';
import Advantages from './Advantages';
import Application from './Application';
import OpenVacancies from './OpenVacancies';
import ProsOfRecruitmentProcess from './ProsOfRecruitmentProcess';
import RecruitmentProcess from './RecrutmentProcess';

import '../styles/main.scss';

function Main() {
  return (
    <main className="main">
      <About />
      <RecruitmentProcess />
      <ProsOfRecruitmentProcess />
      <OpenVacancies />
      <Advantages />
      <Application />
    </main>
  );
}

export default Main;
