import './CardGrid.css';
import Card from './Card/Card';
import { generateRandomNumbers, shuffleCards } from '../../utils/utils';
import { useEffect } from 'react';
import { useState } from 'react';

const serverUrl = 'https://pokeapi.co/api/v2/';
const endpoint = 'pokemon/';
const randomNumbers = generateRandomNumbers();
let ignore = false;

function CardGrid({
  registerOfClickedCardsIDs,
  setRegisterOfClickedCardsIDs,
  bestScore,
  setBestScore,
  setIsModalOpen,
  cardsTabIndex,
}) {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const fetchAndParseImgData = async () => {
      try {
        const imagePromises = randomNumbers.map(async (randomNumber) => {
          const response = await fetch(serverUrl + endpoint + randomNumber);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();
          return {
            id: randomNumber,
            imgTxt: result.name,
            imgSrc: result.sprites.other['official-artwork']['front_default'],
          };
        });

        const imageData = await Promise.all(imagePromises);
        setImgs(imageData);
      } catch (error) {
        console.error(error);
      }
    };

    if (!ignore) fetchAndParseImgData();

    return () => {
      ignore = true;
    };
  }, []);

  const cards = imgs.map((img) => {
    const { imgTxt, imgSrc, id } = img;
    return (
      <Card
        key={id}
        imgTxt={imgTxt}
        imgSrc={imgSrc}
        id={id}
        onCardClick={() => shuffleCards(imgs, setImgs)}
        registerOfClickedCardsIDs={registerOfClickedCardsIDs}
        setRegisterOfClickedCardsIDs={setRegisterOfClickedCardsIDs}
        bestScore={bestScore}
        setBestScore={setBestScore}
        setIsModalOpen={setIsModalOpen}
        cardsTabIndex={cardsTabIndex}
      />
    );
  });

  return <main>{cards}</main>;
}

export default CardGrid;
