import './HeaderRightSection.css';

function HeaderRightSection({ currentScore, bestScore }) {
  return (
    <section id="header-right-section">
      <p>
        Current Score:<span>{currentScore}</span>
      </p>
      <p>
        Best Score:<span>{bestScore}</span>
      </p>
    </section>
  );
}

export default HeaderRightSection;
