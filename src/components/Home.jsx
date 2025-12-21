import bg from "../assets/elysian.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="home-section"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="home-overlay">
        <div className="container home-content">
          <h1>The Art of Drawing Memories</h1>
          <p>
            Drawing is more than lines and shades — it is a way of turning
            emotions, stories, and moments into timeless art.
            <br />
            We celebrate creativity by framing every piece with elegance and care.
          </p>
        </div>
      </div>
    </section>
  );
}
