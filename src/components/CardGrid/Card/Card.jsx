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
  return (
    <button
      onClick={() => {
        onCardClick();
        if (registerOfClickedCardsIDs.includes(id)) {
          if (bestScore < registerOfClickedCardsIDs.length) {
            setBestScore(registerOfClickedCardsIDs.length);
          }
          setRegisterOfClickedCardsIDs([]);
        } else setRegisterOfClickedCardsIDs((oldIDs) => [...oldIDs, id]);
      }}
      className="card"
      aria-label={'Memory card showing ' + imgTxt + ' pokemon'}
      onTouchStart={(e) => e.currentTarget.classList.add('touch')}
      onTouchEnd={(e) => e.currentTarget.classList.remove('touch')}
    >
      <figure>
        <img
          loading="lazy"
          width={475}
          height={475}
          src={imgSrc}
          alt={imgTxt}
        />
        <figcaption>{imgTxt}</figcaption>
      </figure>
    </button>
  );
}

export default Card;
