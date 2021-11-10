import React from 'react';
import '../styles/about.scss';

function About() {
  return (
    <section className="about">
      <div className="container">
        <article
          className="about__article"
        >
          <h2 className="main__section-title about__title">
            About the company
          </h2>
          <p className="about__paragraph">
            Founded in 2019, FreySoft is a global provider of full-cycle
            software development services with headquarters in Kyiv, Ukraine.
            Our objective is to work on innovative projects that matter and
            bring value with the most balanced “personal life” / “work” ratio
            for our team.
          </p>
          <p className="about__paragraph">
            The key areas of our activity include IT staff augmentation,
            web and mobile app development, MVP development for startups,
            integration &amp; automatization, support &amp; maintenance, legacy
            application transformation, UI/ UX product design, and AI-chatbots development.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
