import React, { useState } from "react";
import handleScrollToElement from "../../utils/commonFn";
import { useNavigate } from "react-router";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import siteMapData from "../../staticData/navData";
import useFetchEventRegisteredUsers from "../../hooks/useFetchEventRegisteredUsers";
import registerEmail from "../../utils/registerEmail";
import { FullScreenLoader } from "../loader/Loader";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [registringUser, setregistringUser] = useState(false);
  const regsiteredUsers = useFetchEventRegisteredUsers();

  function handleRegisterUser(e) {
    e.preventDefault();
    const alreadyRegistered = regsiteredUsers?.includes(email);
    if (alreadyRegistered) {
      setEmail("");
      alert("You are already registered!");
    } else {
      setregistringUser(true);
      registerEmail(email, setregistringUser);
      setEmail("");
    }
  }

  return (
    <footer className="radial-shiny-gray-gradient py-5 px-8">
      <section className="flex justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-5">
          <h3 className="text-5xl xl:text-8xl relative font-semibold footer-heading leading-[1.15] mb-2 text-[var(--primary-text)]">
            Contact Us
          </h3>
          <p className="text-blue-300">
            We'd love to hear from you. Contact us through the following channels:
          </p>
          <div className="flex flex-wrap justify-center space-x-4 space-x-6 text-slate-400">
            <div className="text-center">
              <a
                href="tel:+917978939845"
                className="block hover:text-gray-300 transition duration-300 ease-in-out"
              >
                <PhoneSvg />
                +91 7978939845
              </a>
            </div>
            <div className="text-center">
              <a
                href="mailto:growtechie.ind@gmail.com"
                className="block hover:text-gray-300 transition duration-300 ease-in-out"
              >
                <MailSvg />
                growtechie.ind@gmail.com
              </a>
            </div>
            <div className="text-center">
              <a
                href="https://www.google.com/maps?q=Bangalore,India"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gray-300 transition duration-300 ease-in-out"
              >
                <LocationSvg />
                Bangalore, India
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-9">
            <div>
              <h4 className="font-semibold text-gray-200">SiteMap</h4>
              <ul>
                {siteMapData.map((item, idx) => (
                  <li key={idx}>
                    <a
                      onClick={() => handleScrollToElement(item.to, navigate)}
                      className="text-slate-400 hover:underline text-sm cursor-pointer"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-200">Follow us on</h4>
              <ul className="flex flex-col gap-1 items-center">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61551916223733"
                    className="text-4xl text-center text-slate-400 hover:text-5xl transform transition-all"
                  >
                    <IoLogoFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/growtechie/"
                    className="text-4xl text-center text-slate-400 hover:text-5xl transform transition-all"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/growtechieind"
                    className="text-4xl text-center text-slate-400 hover:text-5xl transform transition-all"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/growtechie"
                    className="text-4xl text-center text-slate-400 hover:text-5xl transform transition-all"
                  >
                    <FaSquareXTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleRegisterUser} className="flex flex-start bg-slate-50 rounded-md overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-b-2 border-solid border-gray-100 flex-1 px-4"
              placeholder="Send email to know more about us"
              required
            />
            <button
              className="px-5 py-2 w-fit bg-blue-300 text-white font-bold active:scale-95 transition-all ease-out"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      {registringUser && <FullScreenLoader text="Registering..." />}
    </footer>
  );
};

export default Footer;

const PhoneSvg = () => (
  <svg
    className="w-8 h-8 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailSvg = () => (
  <svg
    className="w-8 h-8 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
      clipRule="evenodd"
    />
  </svg>
);

const LocationSvg = () => (
  <svg
    className="w-8 h-8 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
