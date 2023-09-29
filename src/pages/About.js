import React, { useEffect } from 'react';
import Bg from '../components/bg';
import ImageRotator from '../components/ImageRotation';
import vue  from '../assets/icons/vue.png';
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import js from '../assets/icons/js.png';
import python from '../assets/icons/py.png';
import django from '../assets/icons/dj.png'
import vite from '../assets/icons/vite.png'

function About() {

  const Imagepaths = [  vue , html , css , js , python ,django , vite ]

  useEffect(() => {
    document.title = 'About 😊'
  })

  return (
    <div>
      <Bg />
      <div className="imageRotator">
        <ImageRotator imagePaths={Imagepaths} />
      </div>
      <div className="centered-content">
          <p>👋 Hi, I’m Barathkumar</p>
          <p>👀 I’m interested in Web development and ML.</p>
          <p>🌱 I’m currently pursuing B.Tech in Artificial Intelligence and Data Science at Kumaraguru College of Technology.</p>
      </div>
    </div>
  )
}

export default About