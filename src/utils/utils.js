function generateRandomNumbers() {
  const randomNumbers = [];

  while (randomNumbers.length < 12) {
    const randomNum = Math.floor(Math.random() * 1000) + 1;

    if (!randomNumbers.includes(randomNum)) {
      randomNumbers.push(randomNum);
    }
  }

  return randomNumbers;
}

const shuffleCards = (imgs, setImgs) => {
  const shuffledCards = [...imgs];
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
  setImgs(shuffledCards);
};

export { generateRandomNumbers, shuffleCards };
