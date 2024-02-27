/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './styles.css';

const Joinus = ({ title, description, primaryLink, twitterLink }) => {
  return (
    <div id="joinus" className="font-sans h-screen relative flex justify-center items-center">
      <span className="absolute shiny-border-design top-0 right-[60%] w-[800px] h-[600px]"></span>
      <section className="container mx-auto p-8 md:p-16 rounded-lg shadow-xl bg-opacity-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:col-span-1">
            <h1 className="main-title text-5xl md:text-6xl font-extrabold text-[var(--primary-text)] text-center md:text-left text-gradient">
              {title}
            </h1>

            <div className="main-description prose-lg text-[var(--secondary-text)] text-center md:text-left">
              {description}
            </div>

            <ul className="my-8 flex flex-col gap-4 md:flex-row md:justify-start">
              <li className="self-center break:self-start">{primaryLink}</li>
              <li className="self-center break:self-start">{twitterLink}</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <iframe
              src="https://discord.com/widget?id=1015348978755313764&theme=dark"
              width="100%"
              height="500"
              allowtransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Joinus;
