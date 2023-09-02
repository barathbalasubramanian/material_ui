import React, { useRef, useState } from 'react';
import ProjectCard from '../components/projectCard';
import FloatingActionButtonsLeft from '../components/colors';
import { useLocation } from 'react-router-dom';

function Projects() {

    const [projects] = useState([
        {
            name: 'AquaAssist',
            desc: 'Book online and get water cans delivered straight to your home.',
            link: 'https://github.com/barathbalasubramanian/WaterserviceApp'
        },
        {
            name: 'E-Tech Care',
            desc: 'Digital solutions. Expert guidance. Seamless tech support. Elevate experience. Always connected.',
            link: 'https://github.com/barathbalasubramanian/urban_frontend'
        },
        {
            name: 'FlyHigh Fiasco',
            desc: "Fly. Adapt. Sky's hurdles. Beat the odds. Soar triumphantly!",
            link: 'https://github.com/barathbalasubramanian/'
        },
        {
            name: 'WhisperWeb',
            desc: "Connect, converse, remain concealed. WhisperWeb - where genuine conversations meet discretion.",
            link: 'https://github.com/barathbalasubramanian/Chat-App'
        },
        {
            name: 'Game of Life',
            desc: "Navigate life's twists and turns in this classic journey simulation.",
            link: 'https://github.com/barathbalasubramanian/GameOfLife'
        },
    ]);

    const containerRef = useRef(null);

    const handleWheel = (e) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY;
        }
    };

    const location = useLocation();

    return (
        <div>
            <FloatingActionButtonsLeft location={location.pathname}/>
            <div className='projectDetail' onWheel={handleWheel} ref={containerRef}>
                {projects.map((project, ind) => (
                    <ProjectCard 
                        key={ind}
                        logo="empty"
                        name={project.name}   
                        desc={project.desc}
                        link={project.link}
                    /> 
                ))}
            </div>
        </div>
    )
}

export default Projects