import './Card.css';

function Card({ imgTxt, imgSrc, onCardClick }) {
  return (
    <button
      onClick={onCardClick}
      className="card"
      aria-label={'Memory card showing ' + imgTxt + ' pokemon'}
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
