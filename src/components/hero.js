import React, { useEffect, useRef } from 'react';
import Styles from '../css/hero.module.css';
import snd from '../assets/keyboard.mp3';

const KEYBOARD_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Ctrl', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter']
];

function Hero({ onCompletion }) {
    const keyboardRef = useRef(null);
    const nameRef = useRef(null);
    const degreeRef = useRef(null);

    useEffect(() => {
        typeName();
        const nameDuration = 'BarathKumar B'.length * 200;
        const degDuration = "B.Tech".length * 200;

        const typingTimer = setTimeout(typing, 1000 + nameDuration);
        const splitKeysTimer = setTimeout(() => {
            splitKeys();
            onCompletion();
        }, 1000 + nameDuration + degDuration + 1000); 

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
            onCompletion();
          }, 1100);
    };

    const typeName = () => {
        const name = 'BarathKumar B';
        let delay = 200;
    
        for (let i = 0; i < name.length; i++) {
            setTimeout(() => {
                nameRef.current.innerHTML += name[i];
            }, i * delay); 
        }
    };

    const typing = () => {
        const deg = "B.Tech";
        let delay = 200;

        for (let i = 0; i < deg.length; i++) {
            setTimeout(() => {
                degreeRef.current.innerHTML += deg[i];
            }, i * delay); 
        }
    };

    return (
        <div>
            <div className={Styles.name}>
                <audio id="myAudio" autoPlay>
                    <source src={snd} type="audio/mpeg" />
                </audio>
                <div className={`${Styles.myName} myName`} ref={nameRef}></div>
                <div className={`${Styles.deg} deg`} ref={degreeRef}></div>
            </div>
            <div className={`${Styles.herokeyboard} keydiv`}>
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
