import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p> {/* Correction ici */}
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a saving account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default Hero;
