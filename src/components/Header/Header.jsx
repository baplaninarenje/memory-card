import './Header.css';
import HeaderLeftSection from './HeaderLeftSection/HeaderLeftSection';
import HeaderRightSection from './HeaderRightSection/HeaderRightSection';

function Header({ registerOfClickedCardsIDs }) {
  return (
    <header>
      <HeaderLeftSection />
      <HeaderRightSection
        registerOfClickedCardsIDs={registerOfClickedCardsIDs}
      />
    </header>
  );
}

export default Header;
