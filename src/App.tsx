import './App.css'
import DiagramCube from './components/diagrams/DiagramCube';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
import WelcomeOverlay from './components/WelcomeOverlay';
import MoreDiagrams from './components/diagrams/MoreDiagrams';

function App() {

  const [selectedDiagram, setSelectedDiagram] = useState<string | null>('');
  const [overlay, setOverlay] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('Gender Distribution');
  const [infoText, setInfoText] = useState<string>('Here you can see the distribution between male, female and organizations who have won the Nobel Prize.');

  let maybeOverflow = 'App';

  if (overlay) {
    maybeOverflow = 'App overflow-hidden';
  } else {
    maybeOverflow = 'App';
  }
  
  return (
    <div className={maybeOverflow}>
      {overlay && <WelcomeOverlay setOverlay={setOverlay} />}
      {!overlay && <h1 className='diagram-title'>{ title }</h1>}
      <ButtonsContainer setSelectedDiagram={setSelectedDiagram} overlay={overlay} />
      <DiagramCube selectedDiagram={selectedDiagram} overlay={overlay} setTitle={setTitle} setInfoText={setInfoText} />
      {!overlay && <p className='diagram-info'>{ infoText }</p>}
      {!overlay && 
        <section className="more-wrapper">
          <MoreDiagrams />
        </section>}
    </div>
  )
}

export default App;
