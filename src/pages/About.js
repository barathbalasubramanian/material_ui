import React, { useEffect } from 'react'

function About() {

  useEffect(() => {
    document.title = 'About 😊'
  })

  return (
    <div className="centered-content">
        <p>👋 Hi, I’m Barathkumar</p>
        <p>👀 I’m interested in Web development and ML.</p>
        <p>🌱 I’m currently pursuing B.Tech in Artificial Intelligence and Data Science at Kumaraguru College of Technology.</p>
    </div>
  )
}

export default About