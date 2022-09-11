import React from 'react';
import './About.css';
import WhyChoose from './WhyChoose/WhyChoose';

const About = () => {
  return (
    <>
    <section className='about'>
      <section className='about-head'>
        <h1>About Us</h1>
      </section>
      <section>
        <WhyChoose />
      </section>
    </section>
    </>
  )
}

export default About;