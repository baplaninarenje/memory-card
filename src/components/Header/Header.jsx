import './Header.css';
import HeaderLeftSection from './HeaderLeftSection/HeaderLeftSection';
import HeaderRightSection from './HeaderRightSection/HeaderRightSection';

function Header({ registerOfClickedCardsIDs, bestScore }) {
  return (
    <header>
      <HeaderLeftSection />
      <HeaderRightSection
        registerOfClickedCardsIDs={registerOfClickedCardsIDs}
        bestScore={bestScore}
      />
    </header>
  );
}

export default Header;
