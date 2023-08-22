import React from 'react';
import ProjectCard from '../components/projectCard';

function Projects() {

    return (
        <div className='projectDetail'>
            {Array(5).fill().map((_,ind) => (
                    <ProjectCard 
                        key={ind}
                        logo="empty"
                        name="water service app"    
                        desc="Book online and get water cans delivered straight to your home."
                    /> 
            ))}
        </div>
  )
}

export default Projects