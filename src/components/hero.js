import React, { useEffect, useRef, useState } from 'react';
import Styles from '../css/hero.module.css';
import snd from '../assets/keyboard.mp3';
import me from '../assets/me.png'

const KEYBOARD_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Ctrl', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter']
];

function Hero({ onCompletion }) {
    const keyboardRef = useRef(null);
    const nameRef = useRef(null);
    const degreeRef = useRef(null);
    const [open , setOpen] = useState(false)

    useEffect(() => {

        const keyboard = document.querySelector('.fade-in')
        keyboard.classList.add('visible')

        setTimeout(() => { typeName() } , 200 );

        const nameDuration = 'BarathKumar B'.length * 200;
        const degDuration = "B.Tech".length * 200;

        const typingTimer = setTimeout(typing, 500 + nameDuration);
        const splitKeysTimer = setTimeout(() => {
            splitKeys();
            onCompletion();
        }, 1000 + nameDuration + degDuration + 500); 

        return () => {
            clearTimeout(typingTimer);
            clearTimeout(splitKeysTimer);
        };
    }, []);

    const splitKeys = () => {
        const keys = document.querySelectorAll(`.${Styles.keys}`);
      
        keys.forEach(key => {
          let randomX = (Math.random() - 0.5) * 70;
          let randomY = (Math.random() - 0.5) * 70;
        
          key.style.setProperty('--x', randomX);
          key.style.setProperty('--y', randomY);
        });
        
        document.querySelector('.keyboard').classList.add(`${Styles.split}`);
        setTimeout(() => {
            document.querySelector('.keyboard').style.display = "none"
        }, 500)
        setTimeout(() => {
            var name = document.querySelector(`.${Styles.name}`)
            name.classList.add(`${Styles.name_after}`)
            setOpen(true)
            onCompletion();
            const image = document.querySelector('.mine');
            image.classList.add(`${Styles.animate}`);
        }, 1100);
    };

    const typeName = () => {
        const name = 'BarathKumar B';
        let delay = 200;
        let clickedDuration = 500;
    
        for (let i = 0; i < name.length; i++) {
            setTimeout(() => {
                if (name[i] === " ") {  } 
                else { 
                    let letter = document.getElementById(`Key${name[i].toUpperCase()}`); 
                    letter.classList.add(`${Styles.clicked}`)
                    setTimeout(() => {
                        letter.classList.remove(`${Styles.clicked}`);
                    }, clickedDuration);
                }
                nameRef.current.innerHTML += name[i];
            }, i * delay); 
            
        }
    };

    const typing = () => {
        const deg = "B.Tech";
        let delay = 200;
        let clickedDuration = 500;

        for (let i = 0; i < deg.length; i++) {
            setTimeout(() => {
                if (deg[i] === ".") {  } 
                else { 
                    let letter = document.getElementById(`Key${deg[i].toUpperCase()}`); 
                    letter.classList.add(`${Styles.clicked}`)
                    setTimeout(() => {
                        letter.classList.remove(`${Styles.clicked}`);
                    }, clickedDuration);
                }
                degreeRef.current.innerHTML += deg[i];
            }, i * delay); 
        }
    };

    return (
        <div className='heroSection'>
            <div className={`${Styles.photo} mine`}>
                <img src={me} alt="My Pic" />
                <div className={Styles.intro}>
                    <div>FullStack Developer <br /> ML Engineer</div>
                </div>
            </div>
            <audio id="myAudio" autoPlay>
                <source src={snd} type="audio/mpeg" />
            </audio>
            <div className={Styles.name}>
                <div className={`${Styles.myName} myName`} ref={nameRef}></div>
                <div className={`${Styles.deg} deg`} ref={degreeRef}></div>
                {
                    open && 
                    <div className={Styles.small_ab}>
                        Dedicated Full Stack Developer and ML Engineer, Diving deep into every layer of tech innovation.
                    </div>
                }
            </div>
            <div className={`${Styles.herokeyboard} keydiv fade-in`} >
                <div className={`${Styles.keyboard} keyboard`} ref={keyboardRef}>
                    {KEYBOARD_LAYOUT.map((row, rowIndex) => (
                        row.map(key => (
                            <div 
                                className={`${Styles.keys} ${key === 'Enter' ? Styles.enter : ''} ${key === 'Ctrl' ? Styles.ctrl : ''}`}
                                id={`Key${key}`}
                                key={`${key}-${rowIndex}`}
                            >
                                {key}
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;
