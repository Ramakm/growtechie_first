/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import handleScrollToElement from '../../commonFn';

const Header = () => {
  const navigate = useNavigate();

  function handleNavigation(e, elementId) {
    e.preventDefault();
    handleScrollToElement(elementId);
    toggleMobileNav();
  }

  function toggleMobileNav() {
    const navMobileBtn = document.getElementById('nav-mobile-btn');
    const nav = document.getElementById('nav');
    if (navMobileBtn && nav) {
      if (navMobileBtn.classList.contains('close')) {
        nav.classList.add('hidden');
        navMobileBtn.classList.remove('close');
      } else {
        nav.classList.remove('hidden');
        navMobileBtn.classList.add('close');
      }
    }
  }

  useEffect(() => {
    const navMobileBtn = document.getElementById('nav-mobile-btn');
    if (navMobileBtn) {
      navMobileBtn.addEventListener('click', toggleMobileNav);
    }

    return () => {
      if (navMobileBtn) {
        navMobileBtn.removeEventListener('click', toggleMobileNav);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-md shadow-lg z-50">
      <div
        id="sticky-header"
        className="container flex items-center justify-between max-w-6xl px-8 mx-auto sm:justify-between xl:px-0"
      >
        <a
          href="/"
          className="relative flex items-center inline-block h-5 h-full font-black leading-none"
        >
          <img
            src="/logo.png"
            alt="GrowTechie logo"
            className="w-auto h-20 text-indigo-600 fill-current"
          />
          <span className="ml-3 text-2xl text-gray-800">GrowTechie</span>
        </a>

        <nav
          id="nav"
          className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-lg text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
        >
          <a
            onClick={(e) => handleNavigation(e, 'hero')}
            className="ml-0 mr-0 font-semibold duration-200 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
          >
            Home
          </a>
          <a
            onClick={(e) => handleNavigation(e, 'courses')}
            className="mr-0 font-semibold duration-200 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
          >
            Courses
          </a>
          <a
            onClick={(e) => handleNavigation(e, 'joinus')}
            className="mr-0 font-semibold duration-200 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
          >
            Join us
          </a>
          <a
            onClick={() => navigate('/gallery')}
            className="mr-0 font-semibold duration-200 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
          >
            Gallery
          </a>
          <a
            onClick={(e) => handleNavigation(e, 'testimonials')}
            className="mr-0 font-semibold duration-200 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
          >
            Testimonials
          </a>
          <a
            onClick={(e) => handleNavigation(e, 'faq')}
            className="mr-0 font-semibold duration-200 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
          >
            FAQ
          </a>
          <a
            onClick={(e) => handleNavigation(e, 'about-us')}
            className="font-semibold duration-200 transition-color hover:text-indigo-600"
          >
            About Us
          </a>
        </nav>

        <div
          id="nav-mobile-btn"
          className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10"
        >
          <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
          <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
