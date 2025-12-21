import logo from "../assets/elysian.jpeg";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="brand">
          <img src={logo} alt="FrameCraft Logo" />
          {/* <h2>FrameCraft</h2> */}
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
