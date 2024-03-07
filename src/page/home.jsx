import React from 'react';
import Header from '../components/Header/Navbar';
import Hero from '../components/Hero/Hero';
import Courses from '../components/courses/Courses';
import Aboutus from '../components/aboutus/aboutus';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import Social from '../components/Sociallink/Social';
import Joinus from '../components/joinus/twitter';
import Banner from '../components/banner/Banner';

const Home = () => {
  return (
    <>
      <Header />
      <Social />
      <Hero /> 
      {/* <Banner /> */}
      <Courses />
      <Joinus />
      <Testimonials />
      <FAQ />
      {/* <Aboutus /> */}
      {/* <Footer />  */}
    </>
  );
};
export default Home;
