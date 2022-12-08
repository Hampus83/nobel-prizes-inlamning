import './WelcomeOverlay.css';

interface Props {
    setOverlay: (overlay: boolean) => void;
}

const WelcomeOverlay = ({setOverlay}: Props) => {
    return (
        <section className="overlay-wrapper">
            <h1>The Nobel-Prize</h1>
            <p>The Nobel Prizes are five separate prizes that, according to Alfred Nobel's will of 1895, are awarded to "those who, during the preceding year, have conferred the greatest benefit to humankind." Alfred Nobel was a Swedish chemist, engineer, and industrialist most famously known for the invention of dynamite. He died in 1896. In his will, he bequeathed all of his "remaining realisable assets" to be used to establish five prizes which became known as "Nobel Prizes." Nobel Prizes were first awarded in 1901.</p>
            <button className='overlay-btn hover' onClick={() => setOverlay(false)}>LETS GO!</button>
        </section>
    );
}

export default WelcomeOverlay;