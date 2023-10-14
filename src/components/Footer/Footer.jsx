import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <p className="mt-4 text-gray-300">
            We'd love to hear from you. Contact us through the following
            channels:
          </p>
        </div>
        <div className="flex space-x-6">
          <div className="text-center">
            <a
              href="tel:+917978939845"
              className="block text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              <svg
                className="w-8 h-8 mx-auto text-gray-300 hover:text-white"
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
              +91 7978939845
            </a>
          </div>
          <div className="text-center">
            <a
              href="mailto:growtechie.ind@gmail.com"
              className="block text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              <svg
                className="w-8 h-8 mx-auto text-gray-300 hover:text-white"
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
              growtechie.ind@gmail.com
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps?q=Bangalore,India"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              <svg
                className="w-8 h-8 mx-auto text-gray-300 hover:text-white"
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
              Bangalore, India
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center py-4">
        <div className="container mx-auto text-gray-300">
          <p>&copy; 2023 GrowTechie. All rights reserved.</p>
          <p>
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="/terms-conditions" className="hover:text-white">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
