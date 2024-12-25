import './Card.css';

function Card({
  id,
  imgTxt,
  imgSrc,
  onCardClick,
  registerOfClickedCardsIDs,
  setRegisterOfClickedCardsIDs,
  bestScore,
  setBestScore,
}) {
  const handleCardClick = () => {
    onCardClick();
    if (registerOfClickedCardsIDs.includes(id)) {
      if (bestScore < registerOfClickedCardsIDs.length) {
        setBestScore(registerOfClickedCardsIDs.length);
      }
      setRegisterOfClickedCardsIDs([]);
    } else {
      setRegisterOfClickedCardsIDs((oldIDs) => [...oldIDs, id]);
    }
  };

  return (
    <button
      onClick={handleCardClick}
      className="card"
      aria-label={'Memory card showing ' + imgTxt || 'an unknown' + ' Pokémon'}
      onTouchStart={(e) => e.currentTarget.classList.add('touch')}
      onTouchEnd={(e) => e.currentTarget.classList.remove('touch')}
    >
      <figure>
        <img
          loading="lazy"
          width={475}
          height={475}
          src={imgSrc || '/fallback-image.png'}
          alt={imgTxt || 'Pokémon image not available'}
        />
        <figcaption>
          {imgTxt || (
            <small>Unable to load Pokémon image. Please try again later.</small>
          )}
        </figcaption>
      </figure>
    </button>
  );
}

export default Card;
