import React from 'react'
import { Tilt } from 'react-tilt';
import { Preview } from './Icons';
import vue  from '../assets/icons/vue.png';
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import js from '../assets/icons/js.png';
import python from '../assets/icons/py.png';
import django from '../assets/icons/dj.png'
import vite from '../assets/icons/vite.png'

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
            <div className='preview-icon'><a href={props.link}><Preview /></a></div>
            <div className="inner-element">
                <div className='project'>
                    <div className="pro-name">{ props.name }</div>
                    <div className="pro-des">{ props.desc }</div>
                </div>
                <div className='pro-tools'>
                    <div className='pro-lang'><span className='dot-lang'></span>{ props.lang }</div>
                    <div className='pro-icon'>
                        <img src={ 
                            `${ props.icon === "vue" ? vue 
                                : props.icon === "django" ? django
                                : props.icon === "python" ? python
                                : props.icon === "vite" ? vite                                
                                : ""
                            }` 
                        } alt="" className='pro-img' />
                    </div>
                </div>
            </div>
        </Tilt>
    </div>  
    )
}

export default ProjectCard