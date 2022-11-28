import './DiagramCube.css';
import anime from 'animejs';
import { useEffect } from 'react';

interface Props {
    selectedDiagram: string | null;
    overlay: boolean;
}

const DiagramCube = ({selectedDiagram, overlay}: Props) => {

    const rotateYZeroDeg = '0deg';
    const rotateYTenDeg = '10deg';

    useEffect(() => {
        if (selectedDiagram === 'diagram2') {
            const showDiagram2 = anime({
                targets: '.diagrams-wrapper',
                duration: 3000,
                rotateY: '-90deg',
                left: '15%',
                easing: 'easeOutElastic'
            });  
        } else if (selectedDiagram === 'diagram3') {
            const showDiagram3 = anime({
                targets: '.diagrams-wrapper',
                duration: 3000,
                rotateY: '90deg',
                left: '65%',
                easing: 'easeOutElastic'
            });
        } else if (selectedDiagram === 'diagram4') {
            const showDiagram4 = anime({
                targets: '.diagrams-wrapper',
                duration: 3000,
                rotateY: '0',
                left: '40%',
                easing: 'easeOutElastic'
            });
        } else if (selectedDiagram === 'diagram1') {
            const showDiagram1 = anime({
                targets: '.diagrams-wrapper',
                duration: 3000,
                rotateY: '180deg',
                left: '40%',
                easing: 'easeOutElastic'
            });
        }
    });

    if (!overlay) {
        const showCube = anime({
            targets: '.diagrams-wrapper',
            duration: 2000,
            delay: 1500,
            easing: 'spring',
            top: '25%',
            right: '10%',
        });

        const rotateCube = anime({
            targets: '.diagrams-wrapper',
            duration: 1500,
            delay: 1000,
            keyframes: [
                {rotateX: '0deg', rotateY: '0deg'},
                {rotateX: '10deg', rotateY: '10deg'},
                {rotateX: '0deg', rotateY: '0deg'},
            ],
        })
    }
    
    return (
        <>
            <section className="diagrams-wrapper">
                <section className='diagram diagram1'>
                    <h1>Diagram 1</h1>
                </section>
                <section className='diagram diagram2'>
                    <h1>Diagram 2</h1>
                </section>
                <section className='diagram diagram3'>
                    <h1>Diagram 3</h1>
                </section>
                <section className='diagram diagram4'>
                    <h1>Diagram 4</h1>
                </section>
            </section>
        </>
    );
}

export default DiagramCube;