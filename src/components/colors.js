import React, { useState } from 'react'


function FloatingActionButtonsLeft() {
    
    const ChangeColor = (color) => {
        document.documentElement.style.setProperty('--select', color);
    }

    return (
        <div className='floating-div left'>
            <div className='floating-icons left-icons'>
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