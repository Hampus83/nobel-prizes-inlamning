import './ButtonsContainer.css';
import anime from 'animejs';
import { useState, useEffect } from 'react';

interface Props{
    setSelectedDiagram: (selectedDiagram: string | null) => void;
    overlay: boolean;
}

const ButtonsContainer = ({setSelectedDiagram, overlay}: Props) => {

    const diagrams = ['diagram1','diagram2', 'diagram3', 'diagram4'];

    if (!overlay) {
        useEffect(() => {
            const showBtn1 = anime({
                targets: 'button:nth-child(1)',
                left: '50%',
                duration: 1000,
                easing: 'easeOutBack',
                keyframes: [
                    {scaleX: 0.5},
                    {scaleX: 0.6},
                    {scaleX: 0.7},
                    {scaleX: 0.8},
                    {scaleX: 0.9},
                    {scaleX: 1}
                ],
            });
    
            const showBtn2 = anime({
                targets: 'button:nth-child(2)',
                left: '50%',
                duration: 1000,
                delay: 300,
                easing: 'easeOutBack',
                keyframes: [
                    {scaleX: 0.5},
                    {scaleX: 0.6},
                    {scaleX: 0.7},
                    {scaleX: 0.8},
                    {scaleX: 0.9},
                    {scaleX: 1}
                ],
            });
    
            const showBtn3 = anime({
                targets: 'button:nth-child(3)',
                left: '50%',
                duration: 1000,
                delay: 600,
                easing: 'easeOutBack',
                keyframes: [
                    {scaleX: 0.5},
                    {scaleX: 0.6},
                    {scaleX: 0.7},
                    {scaleX: 0.8},
                    {scaleX: 0.9},
                    {scaleX: 1}
                ],
            });
    
            const showBtn4 = anime({
                targets: 'button:nth-child(4)',
                left: '50%',
                duration: 1000,
                delay: 900,
                easing: 'easeOutBack',
                keyframes: [
                    {scaleX: 0.5},
                    {scaleX: 0.6},
                    {scaleX: 0.7},
                    {scaleX: 0.8},
                    {scaleX: 0.9},
                    {scaleX: 1}
                ],
            });
        }, []);
        
    }

    return (
        <section className="buttons-wrapper">
            {diagrams.map((diagram, index) => (
                <button value={diagram} key={index} onClick={ () => setSelectedDiagram(diagram) } >{diagram}</button> 
            ))}
        </section>
    );
}

export default ButtonsContainer;