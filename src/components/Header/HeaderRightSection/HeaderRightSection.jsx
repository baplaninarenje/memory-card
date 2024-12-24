import './HeaderRightSection.css';

function HeaderRightSection({ registerOfClickedCardsIDs, bestScore }) {
  return (
    <section id="header-right-section">
      <p>
        Current Score:<span>{registerOfClickedCardsIDs.length}</span>
      </p>
      <p>
        Best Score:<span>{bestScore}</span>
      </p>
    </section>
  );
}

export default HeaderRightSection;
