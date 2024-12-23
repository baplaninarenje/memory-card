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

export { generateRandomNumbers };
