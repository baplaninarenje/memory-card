import './Card.css';

function Card({
  id,
  imgTxt,
  imgSrc,
  onCardClick,
  setRegisterOfClickedCardsIDs,
}) {
  return (
    <button
      onClick={() => {
        onCardClick();
        setRegisterOfClickedCardsIDs((oldIDs) => {
          if (oldIDs.includes(id)) return [];
          else return [...oldIDs, id];
        });
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
