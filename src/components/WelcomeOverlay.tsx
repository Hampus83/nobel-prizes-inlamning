import './WelcomeOverlay.css';

interface Props {
    setOverlay: (overlay: boolean) => void;
}

const WelcomeOverlay = ({setOverlay}: Props) => {
    return (
        <section className="overlay-wrapper">
            <h1>The Nobel-Prize</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, amet, ullam sed officia natus blanditiis repellat quisquam officiis optio enim itaque quo placeat vel excepturi recusandae asperiores doloribus architecto odit.</p>
            <button className='overlay-btn hover' onClick={() => setOverlay(false)}>LETS GO!</button>
        </section>
    );
}

export default WelcomeOverlay;