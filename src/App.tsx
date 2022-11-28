import './App.css'
import DiagramCube from './components/diagrams/DiagramCube';
import anime from 'animejs';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
import WelcomeOverlay from './components/WelcomeOverlay';
import MoreDiagrams from './components/diagrams/MoreDiagrams';
import DownScroller from './components/scroller/DownScroller';

function App() {

  const [selectedDiagram, setSelectedDiagram] = useState<string | null>('');
  const [overlay, setOverlay] = useState<boolean>(true);

  let maybeOverflow = 'App';

  if (overlay) {
    maybeOverflow = 'App overflow-hidden';
  } else {
    maybeOverflow = 'App';
  }
  
  return (
    <div className={maybeOverflow}>
      {overlay && <WelcomeOverlay setOverlay={setOverlay} />}
      <ButtonsContainer setSelectedDiagram={setSelectedDiagram} overlay={overlay} />
      <DiagramCube selectedDiagram={selectedDiagram} overlay={overlay} />
      {!overlay && <DownScroller/>}
      {!overlay && 
        <section className="more-wrapper">
          <MoreDiagrams />
        </section>}
    </div>
  )
}

export default App;
