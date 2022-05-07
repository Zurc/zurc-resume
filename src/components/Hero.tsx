import React from 'react';
import './styles/hero.css';
import image from '../images/zurc.jpg';

function Hero() {
  return (
    <section className="hero">
      <section className="hero__wrapper">
        <div className="hero__content">
          <h1 className="hero__title">Hey there, I'm Cruz</h1>
          <p className="hero__text">
            A creative and detailed Frontend Developer | Designer with 8+ years
            building websites and responsive web apps. Proficient in HTML, CSS,
            JavaScript (Angular) plus modern libraries and frameworks.
            Passionate about Design and Usability. based in UK.
          </p>
          <p className="hero__contact">cruzlooking@gmail.com</p>
        </div>
        <div className="hero__image">
          <img src={image} alt="portrait" />
        </div>
      </section>
    </section>
  );
}

export default Hero;
