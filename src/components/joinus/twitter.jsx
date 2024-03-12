/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./styles.css";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Joinus = () => {
  return (
    <div
      id="joinus"
      className="font-sans min-h-screen relative flex justify-center items-center"
    >
      <span className="absolute shiny-border-design top-0 right-[60%] w-[800px] h-[600px]"></span>

      <section className="mx-auto py-8 px-4 lg:p-16 rounded-lg shadow-xl bg-opacity-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
          <div className="md:col-span-1">
            <h1 className="main-title text-3xl lg:text-6xl font-extrabold text-[var(--primary-text)] text-center md:text-left text-gradient">
              The Dynamic Community of Tech Enthusiasts
            </h1>

            <div className="main-description prose-lg text-[var(--secondary-text)] text-center md:text-left">
              <p>
                Being passionate about tech is exhilarating, but it can also be
                a test of innovation, finding your voice, and standing out.
              </p>
              <p>
                Join our online community to connect with fellow tech
                enthusiasts, brainstorm groundbreaking ideas, and inspire one
                another to explore, experiment, and share your tech expertise
              </p>
            </div>

            <ul className="my-8 flex lg:flex-col justify-center gap-4 lg:justify-start">
              <li className="self-center break:self-start">
                {" "}
                <a
                  href="https://discord.gg/6nmQsvpZ"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                  Join Discord Server
                </a>
              </li>
              <li className="self-center break:self-start">
                <a
                  href="https://twitter.com/growtechie"
                  className="btn btn-twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                  Follow on Twitter
                </a>
              </li>
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
              className="h-[300px] md:h-[500px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Joinus;
