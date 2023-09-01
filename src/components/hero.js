import React, { useEffect } from 'react'
import image from "../assets/me.png";
import Styles from '../css/hero.module.css'
import snd from '../assets/keyboard.mp3'

function Hero() {

    useEffect(() => {
        setkeyboard();
    
        setTimeout(() => {
            typeName();
        }, 1000);
    
        const name = 'BarathKumar B';
        const delay = 200;
        const nameDuration = name.length * delay;
        const deg = "B.Tech";
        const degDuration = deg.length * delay;
    
        setTimeout(splitKeys, 1000 + nameDuration); 
        setTimeout(() => {
            const heroKeyboardDiv = document.querySelector('.keydiv');
            heroKeyboardDiv.classList.add(`${Styles.blastAnimation}`);
            setTimeout(() => {
                heroKeyboardDiv.style.display = 'none';
            }, 1000);
        }, 1000 + nameDuration + degDuration + 1000); 

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

    function splitKeys() {
        const keys = document.querySelectorAll('.hero_keys__3qR5Z');
      
        keys.forEach(key => {
          let randomX = (Math.random() - 0.5) * 2; // value between -1 and 1
          let randomY = (Math.random() - 0.5) * 2; // value between -1 and 1
      
          key.style.setProperty('--x', randomX);
          key.style.setProperty('--y', randomY);
        });
      
        document.querySelector('.hero_keyboard__f1iaI').classList.add('split');
      }
      
    function typeName() {
        const name = 'BarathKumar B'
        let delay = 200;
        
        // setTimeout(() => {
        //     var y = document.getElementById("myAudio");
        //     y.muted = false;
        //     y.play();
        // }, 2000)

        for (let i = 0; i < name.length; i++) {
            setTimeout((currentChar) => {
                var key = document.getElementById(`Key${currentChar}`);
                console.log(currentChar);
                document.querySelector('.myName').innerHTML += currentChar;
            }, i * delay, name[i]); 
        }
    }

    function typing() {

        let delay = 200;
        const deg = "B.Tech";
        for (let i = 0; i < deg.length; i++) {
            setTimeout((currentChar) => {
                // var key = document.getElementById(`Key${currentChar}`);
                console.log(currentChar);
                document.querySelector('.deg').innerHTML += currentChar;
            }, i * delay, deg[i]); 
        }
    }

    return (

        <div>
            <div className={Styles.name}>
                <audio id="myAudio" autoPlay >
                    <source src={snd} type="audio/mpeg"/>
                </audio>
                <div className={`${Styles.myName} myName`}></div>
                <div className={`${Styles.deg} deg`}></div>
            </div>
            <div className={`${Styles.herokeyboard} keydiv`}>
                {/* <img src={image} alt="img" /> */}
                <div className={`${Styles.keyboard} keyboard `}></div>
            </div>
        </div>
  )
}

export default Hero