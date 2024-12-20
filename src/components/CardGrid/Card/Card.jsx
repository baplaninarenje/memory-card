function Card() {
  return (
    <button className="card" aria-label="Memory card showing TBA">
      <figure>
        <img
          loading="lazy"
          width={475}
          height={475}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
          alt="TBA"
        />
        <figcaption>TBA</figcaption>
      </figure>
    </button>
  );
}

export default Card;
