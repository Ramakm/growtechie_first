/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { login } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import handleScrollToElement from "../../utils/commonFn";
import { navData, mobileNavData } from "../../staticData/navData";
import Avatar from "@mui/material/Avatar";
import useAuth from "../../hooks/useAuth";
import useMediaQuery from "@mui/material/useMediaQuery";
import JoinAsTeacherForm from "./JoinAsTeacherForm";
// import BottomNavigationComponent from "./BottomNavigation";

const Header = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const [openJoiningForm, setOpenJoiningFrom] = useState(false);
  const largeScreen = useMediaQuery("(min-width:800px)", { noSsr: true });
  const [user] = useAuth();
  useScroll(navRef);

  function handleJoin(e) {
    e.stopPropagation();
    login();
  }

  const currentNavData = largeScreen ? navData : mobileNavData;

  function handleNavigation(e, elementId) {
    e.preventDefault();
    handleScrollToElement(elementId, navigate);
  }

  // Add bottom navigation on small screen

  return (
    <header ref={navRef} className="sticky-nav z-50">
      <div
        id="sticky-header"
        className=" flex items-center justify-between max-w-6xl px-3 mx-auto xl:px-0"
      >
        <a
          href="/"
          className="relative flex items-center h-5 font-black leading-none"
        >
          <img
            src="/logo.png"
            alt="GrowTechie logo"
            className={`w-auto ${
              largeScreen ? "h-20" : "h-12"
            } fill-current invert`}
          />
          {largeScreen && (
            <span className="ml-3 text-2xl text-slate-200">GrowTechie</span>
          )}
        </a>

        <nav
          id="nav"
          className="relative flex items-center justify-between h-24 text-base text-gray-800 border-t border-gray-200 w-auto flex-row bg-transparent mt-0 md:border-none md:py-0"
        >
          {currentNavData.map((item, idx) => (
            <a
              key={idx}
              onClick={(e) => handleNavigation(e, item.to)}
              className="mr-3 cursor-pointer text-white font-semibold duration-200 lg:mr-8 transition-color hover:text-[var(--active-link)]"
            >
              {item.text}
            </a>
          ))}
          {largeScreen &&
            (user ? (
              <Avatar
                alt={user.displayName}
                src={user.photoURL}
                onClick={() => navigate("/profile")}
                className="cursor-pointer"
              />
            ) : (
              <>
                <button
                  className="border-slate-700 border-solid border-[2px] text-white px-4 py-[5px] rounded hover:bg-slate-50 hover:text-black transition-all ease-in-out active:bg-slate-200 mr-3"
                  onClick={handleJoin}
                >
                  Login
                </button>
                <button className="border-slate-700 border-solid border-[2px] text-white px-4 py-[5px] rounded hover:bg-slate-50 hover:text-black transition-all ease-in-out active:bg-slate-200" onClick={() => setOpenJoiningFrom(true)}>
                  Apply as Mentor
                </button>
                {/* <button
                className="ml-auto linear-purple-green-gradient text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                onClick={() => setOpenAuthModal(true)}
              >
                JoinUs
              </button> */}
              </>
            ))}
        </nav>
      </div>
      {openJoiningForm && (
        <JoinAsTeacherForm
          open={openJoiningForm}
          handleClose={() => setOpenJoiningFrom(false)}
        />
      )}
      {/* {largeScreen && <BottomNavigationComponent />} */}
    </header>
  );
};

export default Header;

function useScroll(navRef) {
  const lastScrollTop = useRef(0);
  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    navRef.current.style.top =
      scrollTop > lastScrollTop.current ? "-90px" : "0px";
    lastScrollTop.current = scrollTop;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
