import React, { useState } from 'react';
import '../styles/application.scss';

const Application: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textMessage, setTextMessage] = useState('');

  return (
    <section className="main__application application">
      <div className="container">
        <div className="application__content">
          <div className="application__header-section">
            <h2 className="main__section-title application__title">
              Not found the open vacancy now?
            </h2>
            <p className="application__text">
              Apply anyway as we have new
              <br />
              openings every week!
            </p>
          </div>
          <form
            action=""
            className="application__application-form application-form"
          >
            <div className="application-form__person-info">
              <input
                type="text"
                name="Full name"
                className="application-form__name application-form__input-field"
                placeholder="Full name *"
                id=""
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="text"
                name="email"
                className="application-form__email application-form__input-field"
                placeholder="Email *"
                id=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <textarea
              name="message"
              className="application-form__message application-form__input-field"
              placeholder="Message *"
              value={textMessage}
              onChange={(event) => setTextMessage(event.target.value)}
            />
            <label htmlFor="cv-file">
              <input
                type="file"
                name="cv-file"
                className="application-form__cv-attachment-input"
                id="cv-file"
                placeholder=""
              />
              <img src="" alt="" />
              Upload CV
            </label>
            <span>max file size 1MB; allowed extensions: doc, txt, pdf, docx</span>
            <button
              type="button"
              className="application-form__button"
              disabled={!name && !email && !textMessage}
            >
              Send Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Application;
