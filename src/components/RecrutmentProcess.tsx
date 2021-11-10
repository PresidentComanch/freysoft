import React from 'react';

function RecruitmentProcess() {
  return (
    <article>
      <h2 className="main__section-title">
        FreySoft Recruitment process
      </h2>
      <p>
        {`From the start, you will feel the responsive and effective process of recruiting.
        The main is bureaucracy-free environment inside the company.`}
      </p>
      <p>
        {`Identifying the right talent, attracting them, and motivating them to apply is what we strive for in our recruitment process.
        We have two key phases of hiring the candidate. After, you get either feedback or an offer.`}
      </p>
      <ul>
        <li>
          Stage number 1
          <h3>Interview with an HR manager</h3>
          <p>
            {`We arrange the phone or video interview at your convenient time. Duration is on average 30-40 minutes.
            At this phase we are getting to know each other better,
            determining if the requisite qualifications fill the position and the candidate aligning with an organization’s culture and values.`}
          </p>
        </li>
        <li>
          Stage number 2
          <h3>Technical examination</h3>
          <p>
            {`A tech interview can take about an hour. The date and time of the meeting will be agreed in advance for your convenience.
            This phase is a great opportunity for you to know about the stack and get acquainted with the lead or the team you will be working with.
            You are welcomed to ask any questions you may have about the skills and technologies implemented in the project.`}
          </p>
          <p>
            {`If you are considering multiple vacancies for different projects,
            we can arrange separate technical interviews that will focus on the required skills for each individual project.`}
          </p>
        </li>
      </ul>
    </article>
  );
}

export default RecruitmentProcess;
