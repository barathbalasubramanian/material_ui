import React, { useEffect } from 'react'
import image from "../assets/me.png";
import Styles from '../css/hero.module.css'


function Hero() {

    useEffect(() => {
        setkeyboard();
    }, []);

    function setkeyboard() {
        console.log('Set Keyboard')
        let keyboard = [ ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Ctrl', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter']]
        for (let r = 0; r < keyboard.length; r++) {
            for (let c = 0; c < keyboard[r].length; c++) {
                let keys = document.createElement('div')
                keys.innerHTML = keyboard[r][c]
                keys.id = 'Key' + keyboard[r][c]
                keys.classList.add(`${Styles.keys}`)
                document.querySelector('.keyboard').append(keys)
                if (keyboard[r][c] === 'Enter') { keys.classList.add(`${Styles.enter}`) }
                if (keyboard[r][c] === 'Ctrl') { keys.classList.add(`${Styles.ctrl}`) }
            }
        }
    }
    
    return (
        <div className={Styles.herokeyboard}>
            {/* <img src={image} alt="img" /> */}
            {/* <div className="about-me">
                <h2>Barath kumar</h2>
            </div> */}
            <div className={`${Styles.keyboard} keyboard `}></div>
        </div>
  )
}

export default Hero