import React from 'react';
import Header from '../components/Header/Navbar';
import Hero from '../components/Hero/Hero';
import Courses from '../components/courses/Courses';
import Aboutus from '../components/aboutus/aboutus';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import Social from '../components/Sociallink/Social';
import { main } from '../homepage';
import Joinus from '../components/joinus/twitter';

const Home = () => {
  return (
    <>
      <Header />
      <Social />
      <Hero />
      <Courses />
      <Joinus {...main} />
      <Testimonials />
      <FAQ />
      <Aboutus />
      <Footer />
    </>
  );
};
export default Home;
