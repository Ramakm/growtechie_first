import "./login.css";
import "./login.js";
import React from "react";

const Login = () => {
  return (
    <main>
      <section className="form">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            />
          </svg>
        </div>
        <h1 className="form__title">Log in to your Account</h1>
        <p className="form__description">
          Welcome back! Please, enter your information
        </p>

        <form className="login-form">
          <label className="form-control__label">Email</label>
          <input type="email" className="form-control" />

          <label className="form-control__label">Password</label>
          <div className="password-field">
            <input
              type="password"
              className="form-control"
              minLength="4"
              id="password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>
          <div className="password__settings">
            <label className="password__settings__remember">
              <input type="checkbox" />
              <span className="custom__checkbox">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="form__submit" id="submit">
            Log In
          </button>
        </form>
      </section>

      <section className="form__animation">
        <div id="ball">
          <div className="ball">
            <div id="face">
              <div className="ball__eyes">
                <div className="eye_wrap">
                  <span className="eye"></span>
                </div>
                <div className="eye_wrap">
                  <span className="eye"></span>
                </div>
              </div>
              <div className="ball__mouth"></div>
            </div>
          </div>
        </div>
        <div className="ball__shadow"></div>
      </section>
    </main>
  );
};

export default Login;
