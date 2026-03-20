export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-box brand-box">
          <h3>Elysian</h3>
          <p>
            A creative space dedicated to the art of drawing —
            where lines, shades, and imagination come together.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-box">
          <h4>Follow</h4>
          <div className="social-icons">
            {/* <a href="https://www.instagram.com/elysian_k2?igsh=YjF3M3V1ZGE0ZTU=" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a> */}
            <a href="https://wa.me/919316500894" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Elysian · All Rights Reserved
      </div>
    </footer>
  );
}
