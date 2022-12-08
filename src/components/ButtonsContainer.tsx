import './ButtonsContainer.css';
import anime from 'animejs';
import { useState, useEffect } from 'react';

interface Props{
    setSelectedDiagram: (selectedDiagram: string | null) => void;
    overlay: boolean;
}

const ButtonsContainer = ({setSelectedDiagram, overlay}: Props) => {

    const diagrams = ['Per Country','Top Ten', 'Per Category', 'Gender'];

    useEffect(() => {
        if (!overlay) {
            const showBtn1 = anime({
                targets: '.buttons-wrapper button',
                left: '50%',
                duration: 1000,
                easing: 'easeOutBack',
                delay: anime.stagger(200),
                keyframes: [
                    {scaleX: 0.5},
                    {scaleX: 0.6},
                    {scaleX: 0.7},
                    {scaleX: 0.8},
                    {scaleX: 0.9},
                    {scaleX: 1}
                ],
            });
        }
    }, [overlay]);
    
    return (
        <section className="buttons-wrapper">
            {diagrams.map((diagram, index) => (
                <button className='cube-btn' value={diagram} key={index} onClick={ () => setSelectedDiagram(diagram) } >{diagram}</button> 
            ))}
        </section>
    );
}

export default ButtonsContainer;