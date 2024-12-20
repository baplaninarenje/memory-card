function Header() {
  return (
    <>
      <header>
        <section id="header-left-section">
          <h1>Memory Card Game</h1>
          <p>
            Get points by clicking on an image but don&apos;t click on any more
            than once!
          </p>
        </section>

        <section id="header-right-section">
          <p>
            Current Score:<span>0</span>
          </p>
          <p>
            Best score:<span>0</span>
          </p>
        </section>
      </header>
    </>
  );
}

export default Header;
