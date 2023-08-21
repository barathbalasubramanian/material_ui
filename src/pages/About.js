import React, { useEffect } from 'react'
import Bg from '../components/bg'

function About() {

  useEffect(() => {
    document.title = 'About 😊'
  })

  return (
    <div>
      <Bg />
      <div className="centered-content">
          <p>👋 Hi, I’m Barathkumar</p>
          <p>👀 I’m interested in Web development and ML.</p>
          <p>🌱 I’m currently pursuing B.Tech in Artificial Intelligence and Data Science at Kumaraguru College of Technology.</p>
      </div>
    </div>
  )
}

export default About