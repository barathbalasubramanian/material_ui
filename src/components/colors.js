import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';


function FloatingActionButtonsLeft(props) {
    
    function namedColorToRGB(colorName) {
        const fakeDiv = document.createElement("div");
        fakeDiv.style.color = colorName;
        document.body.appendChild(fakeDiv);
    
        const computedColor = window.getComputedStyle(fakeDiv).color;
        document.body.removeChild(fakeDiv);
        
        const rgb = computedColor.match(/\d+/g).slice(0, 3).join(', ');
    
        return rgb;
    }

    const loc = useLocation();
    const ChangeColor = (color) => {
        document.documentElement.style.setProperty('--select', color);

        if (loc.pathname === '/projects') {
            let rgb = namedColorToRGB(color)
            document.documentElement.style.setProperty('--project-bg', rgb);
        }
    }

    console.log(props['location'])
    return (
        <div className=
            {
                props['location'] === '/projects' 
                    ? 'floating-div-project' : 'floating-div '
            }>
            <div className=
                {
                    props['location'] === '/projects' 
                        ? 'floating-icons-project left-icons' : 'floating-icons left-icons'
                }>
            <div className="dot green" onClick={() => ChangeColor('yellow')}></div>
            <div className="dot blue" onClick={() => ChangeColor('red')}></div>
            <div className="dot red" onClick={() => ChangeColor('blue')}></div>
            <div className="dot yellow" onClick={() =>ChangeColor('green')}></div>
            <div className="dot purple" onClick={() => ChangeColor('white')}></div>
            </div>
        </div>
  )
}

export default FloatingActionButtonsLeft