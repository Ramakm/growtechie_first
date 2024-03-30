import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { login } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import handleScrollToElement from "../../utils/commonFn";
import { navData } from "../../staticData/navData";
import Avatar from "@mui/material/Avatar";
import useAuth from "../../hooks/useAuth";
import useMediaQuery from "@mui/material/useMediaQuery";
import JoinAsTeacherForm from "./JoinAsTeacherForm";

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

  function handleNavigation(e, elementId) {
    e.preventDefault();
    handleScrollToElement(elementId, navigate);
  }

  // Add bottom navigation on small screen

  return (
    <header ref={navRef} className="sticky-nav z-50">
      <div
        id="sticky-header"
        className="flex items-center justify-between max-w-[1300px] px-3 mx-auto xl:px-0"
      >
        <a
          href="/"
          className="relative h-fit flex md:flex-col lg:flex-row items-center font-black leading-none"
        >
          <img
            src="/logo.png"
            alt="GrowTechie logo"
            className={`w-auto h-12 lg:h-20 fill-current invert`}
          />
          {largeScreen && (
            <span className="ml-3 text-xl lg:text-2xl text-slate-200">
              GrowTechie
            </span>
          )}
        </a>

        <nav
          id="nav"
          className="relative flex items-center justify-between h-24 text-base text-gray-800 border-t border-gray-200 w-auto flex-row bg-transparent mt-0 md:border-none md:py-0"
        >
          {largeScreen &&
            navData.map((item, idx) => (
              <a
                key={idx}
                onClick={(e) => handleNavigation(e, item.to)}
                className="mr-5 cursor-pointer text-white font-semibold duration-200 lg:mr-8 transition-color hover:text-[var(--active-link)]"
              >
                {item.text}
              </a>
            ))}
          {user ? (
            <Avatar
              alt={user.displayName}
              src={user.photoURL}
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
            />
          ) : (
            <>
              <button
                className="border-slate-700 border-solid border-[2px] text-white px-4 py-[5px] rounded hover:bg-slate-50 hover:text-black transition-all text-sm md:text-base ease-in-out active:bg-slate-200 mr-3"
                onClick={handleJoin}
              >
                Login
              </button>
              <button
                className="border-slate-700 border-solid border-[2px] text-white px-4 py-[5px] rounded hover:bg-slate-50 hover:text-black transition-all text-sm md:text-base ease-in-out active:bg-slate-200"
                onClick={() => setOpenJoiningFrom(true)}
              >
                Apply as Mentor
              </button>
            </>
          )}
        </nav>
      </div>
      {openJoiningForm && (
        <JoinAsTeacherForm
          open={openJoiningForm}
          handleClose={() => setOpenJoiningFrom(false)}
        />
      )}
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
