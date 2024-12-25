import './Header.css';
import HeaderLeftSection from './HeaderLeftSection/HeaderLeftSection';
import HeaderRightSection from './HeaderRightSection/HeaderRightSection';

function Header({ currentScore, bestScore }) {
  return (
    <header>
      <HeaderLeftSection />
      <HeaderRightSection currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

export default Header;
