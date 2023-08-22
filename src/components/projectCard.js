import React from 'react'
import { Tilt } from 'react-tilt';
import { Preview } from './Icons';

function ProjectCard(props) {
  return (
    <div>
        <Tilt
            className="tilts"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.95}
            scale={.75}
        >
            <div className='preview-icon'><Preview /></div>
            <div className="inner-element">
                <div className="logo"><img src="" alt="" /></div>
                <div className='project'>
                    <div className="pro-name">{ props.name }</div>
                    <div className="pro-des">{ props.desc }</div>
                </div>
            </div>
        </Tilt>
    </div>  
  )
}

export default ProjectCard