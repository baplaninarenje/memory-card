import { useState } from 'react';
import './App.css';
import CardGrid from './components/CardGrid/CardGrid';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

function App() {
  const [registerOfClickedCardsIDs, setRegisterOfClickedCardsIDs] = useState(
    []
  );
  const [bestScore, setBestScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardsTabIndex = isModalOpen ? -1 : 0;

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
        setIsModalOpen={setIsModalOpen}
        cardsTabIndex={cardsTabIndex}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
