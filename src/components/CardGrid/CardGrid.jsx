import './CardGrid.css';
import Card from './Card/Card';
import { generateRandomNumbers, shuffleCards } from '../../utils/utils';
import { useEffect } from 'react';
import { useState } from 'react';

const serverUrl = 'https://pokeapi.co/api/v2/';
const endpoint = 'pokemon/';
const randomNumbers = generateRandomNumbers();
let ignore = false;

function CardGrid({ setRegisterOfClickedCardsIDs }) {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const fetchAndParseImgData = async (randomNumber) => {
      try {
        const response = await fetch(serverUrl + endpoint + randomNumber);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        setImgs((oldImgs) => [
          ...oldImgs,
          {
            id: randomNumber,
            imgTxt: result.name,
            imgSrc: result.sprites.other['official-artwork']['front_default'],
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    };
    if (!ignore) {
      randomNumbers.forEach((randomNumber) => {
        fetchAndParseImgData(randomNumber);
      });
    }
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
        setRegisterOfClickedCardsIDs={setRegisterOfClickedCardsIDs}
      />
    );
  });

  return <main>{cards}</main>;
}

export default CardGrid;
