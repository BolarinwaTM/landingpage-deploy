import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import main from './main.js';
import Express from './img/delivery.png';
import Analysis from './img/Analysis.png';
import Analytics from './img/analytics.png';
import Accounting from './img/accounting.png';
import Rider from './img/rider.png';
import Confetti from './img/confetti.png';
import './App.css';


function App() {
  const handleSubmit = (values) => {
    console.log(`Email: ${values.email}`);
  };

  return (
    <div>
    {/* HEADER */}
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">DeliveryB<span>oo</span>th</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#about" className="nav__link active-link">
              <Unicons.UilUser size="20" className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
              <Unicons.UilBriefcaseAlt size="20" className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#team" className="nav__link">
              <Unicons.UilUsersAlt size="20" className="nav__icon" /> Team
              </a>
            </li>
            <li className="nav__item">
            <a href="#contact" className="nav__link btn2">
              Get Started
            </a>
            </li>
          </ul>
          <Unicons.UilTimes size="28" className="nav__close" id="nav-close" />
        </div>

        <div className="nav__btns">
        <Unicons.UilMoon size="20" className="change-theme" id="theme-button" />
        <Unicons.UilSun size="20" className="nav__sun" id="nav-sun" />

          <div className="nav__toggle" id="nav-toggle">
          <Unicons.UilApps size="20" />
          </div>
        </div>
      </nav>
    </header>

    {/* MAIN */}
    <main className="main">
      {/* Home */}
      <section className="home section" id="home">
        <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
            <Unicons.UilLinkedinAlt size="20" className="" />
            </a>
            <a href="https://dribbble.com/" target="_blank" className="home__social-icon">
            <Unicons.UilDribbble size="20" className="" />
            </a>
            <a href="https://github.com/" target="_blank" className="home__social-icon">
            <Unicons.UilGithubAlt size="20" className="" />
            </a>
          </div>

          <div className="home__img">
      <img src={Express} alt="truck" className="home__blob-img"/>
      </div>

      <div className="home__data">
        <h1 className="home__title">
        Set-up and manage your logistics business easily.
        </h1>
        <p className="home__description">
        Bring your logistics business online with robust tools to help you grow your business. manage orders and improve day to day running.
        </p>
        <a href="#contact" className="button button--flex btn1">
          Get Started <Unicons.UilMessage size="20" className="button__icon" />
        </a>
      </div>
    </div>

    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
      <Unicons.UilMouseAlt size="20" className="home__scroll-mouse" />
      <span className="home__scroll-name">Scroll Down</span>
      <Unicons.UilArrowDown size="20" className="home__scroll-arrow" />
      </a>
    </div>
    </div>
    </section>

    {/* SERVICES */}
    <section className="services section sec" id="about">
      <h2 className="section__title title1">An end-to-end digital solution for logistics</h2>

      <div className="services__container container grid">
        {/* SERVICES 1 */}
        <p className="text1">
        Reliable platform with all the necessary tools to digitalize operations of your logistics business, we provide everything needed for you to start, run and scale.
        </p>
      </div>
    </section>

    {/* extra section */}
    <section className="home section sec" id="services">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
            <Unicons.UilLinkedinAlt size="20" className="" />
            </a>
            <a href="https://dribbble.com/" target="_blank" className="home__social-icon">
            <Unicons.UilDribbble size="20" className="" />
            </a>
            <a href="https://github.com/" target="_blank" className="home__social-icon">
            <Unicons.UilGithubAlt size="20" className="" />
            </a>
          </div>

          <div className="home__img">
            <img src={Analysis} alt="truck" className="home__blob-img"/>
          </div>

        <div className="home__data">
        <h1 className="home__title">
          Manage Orders
        </h1>
        <p className="home__description">
          Receive orders through an online platform provided for your customers, Track and confirm orders with advanced dashboard.
        </p>
        </div>
      </div>
    </div>
    </section>


    {/* extra section */}
    <section className="home section sec" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
            <Unicons.UilLinkedinAlt size="20" className="" />
            </a>
            <a href="https://dribbble.com/" target="_blank" className="home__social-icon">
            <Unicons.UilDribbble size="20" className="" />
            </a>
            <a href="https://github.com/" target="_blank" className="home__social-icon">
            <Unicons.UilGithubAlt size="20" className="" />
            </a>
          </div>

          <div className="home__img">
            <img src={Analytics} alt="truck" className="home__blob-img"/>
          </div>

        <div className="home__data reverse">
        <h1 className="home__title">
          Analytics
        </h1>
        <p className="home__description">
          Gain insights you need to grow, observe trends and monitor your business properly.
        </p>
        </div>
      </div>
    </div>
    </section>


    {/* extra section */}
    <section className="home section sec" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
            <Unicons.UilLinkedinAlt size="20" className="" />
            </a>
            <a href="https://dribbble.com/" target="_blank" className="home__social-icon">
            <Unicons.UilDribbble size="20" className="" />
            </a>
            <a href="https://github.com/" target="_blank" className="home__social-icon">
            <Unicons.UilGithubAlt size="20" className="" />
            </a>
          </div>

          <div className="home__img">
            <img src={Rider} alt="truck" className="home__blob-img"/>
          </div>

        <div className="home__data">
        <h1 className="home__title">
          Manage riders and equipments
        </h1>
        <p className="home__description">
          Seamless onboarding of riders and manage all your bikes including tracking of service and repairs.
        </p>
        </div>
      </div>
    </div>
    </section>


    {/* extra section */}
    <section className="home section sec" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
            <Unicons.UilLinkedinAlt size="20" className="" />
            </a>
            <a href="https://dribbble.com/" target="_blank" className="home__social-icon">
            <Unicons.UilDribbble size="20" className="" />
            </a>
            <a href="https://github.com/" target="_blank" className="home__social-icon">
            <Unicons.UilGithubAlt size="20" className="" />
            </a>
          </div>

          <div className="home__img">
            <img src={Accounting} alt="truck" className="home__blob-img"/>
          </div>

        <div className="home__data reverse">
        <h1 className="home__title">
          Accounting
        </h1>
        <p className="home__description">
          Receive, track and record payments and expenses.
        </p>
        </div>
      </div>
    </div>
    </section>

    {/* Contact */}
    <section className="contact section" id="contact">
        <div className="contact__container container grid">
        <div className="contact__content grid">
        <div className="contact__data">
        <h1 className="contact__title title2">
          All this and more coming directly to you soon! Be first in line to know when we launch  <img src={Confetti} alt="confetti" size="10" />
        </h1>

        <div className="wrapper">
          <div className="contact-form">
            <div className="input-fields">
              <input type="email" className="input" placeholder="Enter Your Email Address Here" />
            </div>
            <div className="msg">
            <button onClick={handleSubmit} type="submit" className="btn">Notify Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>

    {/* Scroll to Top */}
    <a href="#" className="scrolltop" id="scroll-top">
    <Unicons.UilArrowUp size="26" className="scrolltop__icon" />
    </a>
  </main>
  </div>
  );
}

export default App;
