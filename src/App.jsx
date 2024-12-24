import { useState } from 'react';
import './App.css';
import CardGrid from './components/CardGrid/CardGrid';
import Header from './components/Header/Header';

function App() {
  const [registerOfClickedCardsIDs, setRegisterOfClickedCardsIDs] = useState(
    []
  );
  return (
    <>
      <Header registerOfClickedCardsIDs={registerOfClickedCardsIDs} />
      <CardGrid setRegisterOfClickedCardsIDs={setRegisterOfClickedCardsIDs} />
    </>
  );
}

export default App;
