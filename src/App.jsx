import { useState } from 'react';
import './App.css';
import CardGrid from './components/CardGrid/CardGrid';
import Header from './components/Header/Header';

function App() {
  const [registerOfClickedCardsIDs, setRegisterOfClickedCardsIDs] = useState(
    []
  );
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header
        currentScore={registerOfClickedCardsIDs.length}
        bestScore={bestScore}
      />
      <CardGrid
        registerOfClickedCardsIDs={registerOfClickedCardsIDs}
        setRegisterOfClickedCardsIDs={setRegisterOfClickedCardsIDs}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
