import React from 'react';
import { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import data from '../../data/json_award.json';
import './MoreDiagrams.css';
import anime from 'animejs';
import { awardsPerCategorybyYearOptions } from './options';

const MoreDiagrams = () => {

    const [chosenYear, setChosenYear] = useState<string>('');
    const [chartVisible, setChartVisible] = useState<boolean>(false);
    const [fade, setFade] = useState<boolean>(false);
    const [slide, setSlide] = useState<boolean>(false);
    // const [roll, setRoll] = useState<boolean>(false);

    // ********************* 2. Antal pristagare inom de olika kategorierna för ett valt år ********************************

    const awards = data.map(object => {
        if (object.laureates === undefined) {
            return { year: object.awardYear, category: object.category.en, noOfWinners: 0 }
        } else {
            return { year: object.awardYear, category: object.category.en, noOfWinners: object.laureates.length }
        }
    });

    const yearsLabels: string[] = [];
    const yearDataset: number[] = [];

    awards.map(object => {
        if (!yearsLabels.includes(object.category)) {
            yearsLabels.push(object.category);
        }
    });

    for (let i = 0; i < awards.length; i++) {
        if (awards[i].year === chosenYear) {
            yearDataset.push(awards[i].noOfWinners);
        }
    }

    const eachYear: string[] = [];

    awards.map(object => {
        if (!eachYear.includes(object.year)) {
            eachYear.push(object.year);
        }
    });

    const noOfWinnersPerYearChart = {
        datasets: [
            {
                data: yearDataset,
                label: 'Count',
                backgroundColor: ['#CFFDE1', '#68B984', '#3D5656', '#F3EFE0', '#D23369', '#00FFF6'],
            }
        ],
        labels: yearsLabels
    }

    //******************************************************************************************************* */

    function chooseYear(event: React.ChangeEvent<HTMLSelectElement>) {
        setChosenYear(event.target.value);
    }

    function showChart() {
        if (!chartVisible && fade) {
            setChartVisible(true);  
            const fadeIn = anime({
                targets: '.margin-wrapper .fade',
                duration: 800,
                opacity: 1,
                easing: 'easeInQuad'
            });
        } else if (!chartVisible && slide) {
            setChartVisible(true);
            const slideIn = anime({
                targets: '.margin-wrapper .slide',
                duration: 500,
                easing: 'spring',
                left: '7.7%'
            });
        } else {
            if (chartVisible && fade) {
                setChartVisible(false);
                const fadeOut = anime({
                    targets: '.margin-wrapper .fade',
                    duration: 500,
                    opacity: 0,
                    easing: 'easeOutQuad'
                });
            } else if (chartVisible && slide) {
                setChartVisible(false);
                const slideOut = anime({
                    targets: '.margin-wrapper .slide',
                    duration: 1000,
                    easing: 'spring(1, 80, 10, 0)',
                    left: '-100%'
                });
            }
        }    
    }

    function animationFade() {
        setChartVisible(false);
        setFade(true);
        setSlide(false);
        const slideOut = anime({
            targets: '.margin-wrapper .slide',
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)',
            left: '-100%'
        });
        // setRoll(false);
    }

    function animationSlide() {
        setChartVisible(false);
        setFade(false);
        setSlide(true);
        const fadeOut = anime({
            targets: '.margin-wrapper .fade',
            duration: 500,
            opacity: 0,
            easing: 'easeOutQuad'
        });
        // setRoll(false);
    }

    // function animationRoll() {
    //     setChartVisible(false);
    //     setFade(false);
    //     setSlide(false);
    //     setRoll(true);
    // }

    return (
        <section className="more-diagrams-wrapper">
            <section className="selection">
                <form className="radio-wrapper">
                    <div className="radio-container">
                        <span>Fade in/out</span>
                        <input onClick={animationFade} value="fade" type="radio" name='animation'/>
                    </div>
                    <div className="radio-container">
                        <span>Slide in/out</span>
                        <input onClick={animationSlide} value="slide" type="radio" name='animation'/>
                    </div>
                    {/* <div className="radio-container">
                        <span>Roll in/out</span>
                        <input onClick={animationRoll} value="roll" type="radio" name='animation'/>
                    </div> */}
                </form>
                <article className='btns-wrapper'>
                    <button onClick={showChart} className='show-chart'>{chartVisible ? 'Hide Chart' : 'Show Chart'}</button>
                    <select onChange={chooseYear} name="years" id="years">
                        <option value="default">Choose year:</option>
                        { eachYear.map((year, index) => <option value={year} key={index} >{year}</option>) }
                    </select>
                </article>
            </section>
            <div className="margin-wrapper">
                <article className="chart-wrapper fade">
                    <Bar options={awardsPerCategorybyYearOptions} data={noOfWinnersPerYearChart}/>
                </article>
                <article className="chart-wrapper slide">
                    <Bar options={awardsPerCategorybyYearOptions} data={noOfWinnersPerYearChart}/>
                </article>
                <p className='chart-info'>This chart displays how many Nobel prizes were awarded per category for any given year</p>
            </div>
        </section>
    );
}

export default MoreDiagrams;