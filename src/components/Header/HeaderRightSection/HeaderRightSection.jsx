import './HeaderRightSection.css';

function HeaderRightSection({ registerOfClickedCardsIDs }) {
  return (
    <section id="header-right-section">
      <p>
        Current Score:<span>{registerOfClickedCardsIDs.length}</span>
      </p>
      <p>
        Best Score:<span>0</span>
      </p>
    </section>
  );
}

export default HeaderRightSection;
