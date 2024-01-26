import React from 'react';
import handleScrollToElement from '../../commonFn';
import { useNavigate } from 'react-router';
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const siteMapData = [
  { text: "Home", to: "hero" },
  { text: "Courses", to: "courses" },
  { text: "Join us", to: "joinus" },
  { text: "Gallery", to: "/gallery" },
  { text: "Testimonials", to: "testimonials" },
  { text: "FAQ", to: "faq" },
  { text: "About Us", to: "about-us" }
];


const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-700 py-5 px-8">
      <section className="flex justify-center gap-5 flex-col md:flex-row">
        <div className="flex flex-col gap-5">
          <h3
            className="text-5xl xl:text-8xl relative font-semibold footer-heading leading-[1.15] mb-2 text-white"
          >Contact Us</h3>
          <p className="text-blue-300">
            We'd love to hear from you. Contact us through the following
            channels:
          </p>
          <div className="flex flex-wrap space-x-6 text-slate-400">
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
          <div className="flex gap-9">
            <div>
              <h4 className="font-semibold text-gray-200">SiteMap</h4>
              <ul>
                {siteMapData.map((item, idx) => (
                  <li key={idx}>
                    <a
                      onClick={() => handleScrollToElement(item.to, navigate)}
                      className="text-slate-400 hover:underline text-sm cursor-pointer"
                    >{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-200">Follow us on</h4>
              <ul className="flex flex-col gap-1 items-center">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61551916223733"
                    className="text-4xl text-center text-slate-400 hover:text-5xl transform transition-all"
                  ><IoLogoFacebook /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/growtechie/"
                    className="text-4xl text-center text-slate-400 hover:text-5xl transform transition-all"
                  ><FaInstagramSquare /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/growtechieind"
                    className="text-4xl text-center text-slate-400 hover:text-5xl transform transition-all"
                  ><FaLinkedin /></a>
                </li>
                <li>
                  <a href="https://twitter.com/growtechie"
                    className="text-4xl text-center text-slate-400 hover:text-5xl transform transition-all"
                  ><FaSquareXTwitter /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          Map will come here
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13885.855007308546!2d73.43053239999999!3d29.531986099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d8b000f41444b%3A0xe29b4630e6ba95cf!2s23%20wala%20Moga!5e0!3m2!1sen!2sin!4v1706268925562!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe> */}
        </div>
      </section>
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
)

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
)

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
)