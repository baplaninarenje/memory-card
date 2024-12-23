import './Card.css';

function Card({ imgTxt, imgSrc }) {
  return (
    <button className="card" aria-label={'Memory card showing ' + imgTxt}>
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
