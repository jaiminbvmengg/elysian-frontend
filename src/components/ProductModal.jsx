export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const instaUsername = "elysian_k2";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <p className="price">{product.price}</p>

        <div className="modal-actions">
          <a
            href={`https://www.instagram.com/elysian_k2?igsh=YjF3M3V1ZGE0ZTU=`}
            target="_blank"
            rel="noreferrer"
            className="insta-btn"
          >
            Open Instagram DM
          </a>

          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
