import './DownScroller.css';
import ScrollArrow from '../../assets/scrollarrow.svg';
import { useState, useRef } from 'react';
import anime from 'animejs';

const DownScroller = () => {
    const [maybeVisible, setMaybeVisible] = useState<string>('hidden');

    const ref = useRef(null);

    const startAnimateScroll = () => {
        console.log('test');
        setMaybeVisible('hover');
        const moveArrows = anime({
            targets: 'img',
            translateY: '4em',
            easing: 'easeInOutQuad',
            duration: 700,
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

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    return (
        <section onMouseEnter={startAnimateScroll} onMouseLeave={stopAnimateScroll} onClick={handleClick} className="down-scroller">
            <div className="img-wrapper">
                <img className={maybeVisible} src={ScrollArrow} alt="" />
                <img className={maybeVisible} src={ScrollArrow} alt="" />
            </div>
            <h2>Scroll down</h2>
            <div className="img-wrapper">
                <img className={maybeVisible} src={ScrollArrow} alt="" />
                <img className={maybeVisible} src={ScrollArrow} alt="" />
            </div>
        </section>
    );
}

export default DownScroller;