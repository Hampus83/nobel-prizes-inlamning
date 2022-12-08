import './DiagramCube.css';
import anime from 'animejs';
import { useEffect, useState } from 'react';
import { Pie, Bar, Line, Scatter } from 'react-chartjs-2';
import { genderDiagramData, noOfWinnersFromEachCountryDiagramData } from '../../data/laureatesData';
import { noOfPrizesPerCategoryDiagramData, topTenLaureatesDiagram  } from '../../data/awardData';
import { pieOptions, topTenOptions, countriesOptions } from '../diagrams/options';

interface Props {
    selectedDiagram: string | null;
    overlay: boolean;
    setTitle: (title: string) => void;
    setInfoText: (infoText: string) => void;
}

const DiagramCube = ({selectedDiagram, overlay, setTitle, setInfoText}: Props) => {

    useEffect(() => {
        if (selectedDiagram === 'Top Ten') {
            setTitle('Top ten Nobel Prize winners');
            setInfoText('This data shows the 10 people or organizations who have won the Nobel Prize most times')
            const showDiagram2 = anime({
                targets: '.diagrams-wrapper',
                duration: 3000,
                rotateY: '-90deg',
                left: '15%',
                easing: 'easeOutElastic'
            });  
        } else if (selectedDiagram === 'Per Category') {
            setTitle('Nobel Prizes per category');
            setInfoText('Here you can see how many Nobel Prizes has been won in each category')
            const showDiagram3 = anime({
                targets: '.diagrams-wrapper',
                duration: 3000,
                rotateY: '90deg',
                left: '65%',
                easing: 'easeOutElastic'
            });
        } else if (selectedDiagram === 'Gender') {
            setTitle('Gender Distribution');
            setInfoText('Here you can see the distribution between male, female and organizations who have won the Nobel Prize.')
            const showDiagram4 = anime({
                targets: '.diagrams-wrapper',
                duration: 3000,
                rotateY: '0',
                left: '40%',
                easing: 'easeOutElastic'
            });
        } else if (selectedDiagram === 'Per Country') {
            setTitle('Nobel Prizes per country');
            setInfoText('This chart shows all countries who have won 2 or more Nobel Prizes.')
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
                    <div className="diagram-wrapper">
                        <Line options={countriesOptions} data={noOfWinnersFromEachCountryDiagramData} />
                    </div>
                </section>

                <section className='diagram diagram2'>
                    <div className="diagram-wrapper">
                        <Bar options={topTenOptions} data={topTenLaureatesDiagram} />
                    </div>
                </section>

                <section className='diagram diagram3'>
                    <div className="diagram-wrapper">
                        <Pie options={pieOptions} data={noOfPrizesPerCategoryDiagramData} />
                    </div>
                </section>
                
                <section className='diagram diagram4'>
                    <div className="diagram-wrapper">
                        <Pie options={pieOptions} data={genderDiagramData} />
                    </div>
                </section>

            </section>
        </>
    );
}

export default DiagramCube;