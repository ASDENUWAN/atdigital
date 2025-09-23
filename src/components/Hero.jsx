function Hero() {
  return (
    <section className="hero-section position-relative">
      {/* Background Image */}
      <img src="/images/hero.png" className="img-fluid w-100" alt="hero" />

      {/* Overlay Content */}
      <div className="hero-box position-absolute">
        <h1 className="hero-title">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <button className="hero-btn fw-bold">GET FREE CONSULTATION</button>
      </div>
    </section>
  );
}
export default Hero;
