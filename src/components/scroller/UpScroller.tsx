import './UpScroller.css';
import ScrollArrow from '../../assets/scrollarrowrotated.svg';
import { useState } from 'react';
import anime from 'animejs';

const UpScroller = () => {
    const [maybeVisible, setMaybeVisible] = useState<string>('hidden');

    const startAnimateScroll = () => {
        console.log('test');
        setMaybeVisible('hover');
        const moveArrows = anime({
            targets: 'img',
            translateY: '5em',
            easing: 'easeInOutQuad',
            duration: 700,
            direction: 'reverse',
            loop: true
        });
    }

    const stopAnimateScroll = () => {
        setMaybeVisible('hidden');
        const resetArrows = anime({
            targets: 'img',
            translateY: 0
        })
    }
    
    return (
        <section onMouseEnter={startAnimateScroll} onMouseLeave={stopAnimateScroll} className="up-scroller">
            <div className="img-wrapper">
                <img className={maybeVisible} src={ScrollArrow} alt="" />
                <img className={maybeVisible} src={ScrollArrow} alt="" />
            </div>
            <h2>Scroll up</h2>
            <div className="img-wrapper">
                <img className={maybeVisible} src={ScrollArrow} alt="" />
                <img className={maybeVisible} src={ScrollArrow} alt="" />
            </div>
        </section>
    );
}

export default UpScroller;