import './Modal.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return false;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <dialog className="modal-overlay" onKeyDown={handleKeyDown} open>
      <div
        className="modal-content"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-message"
      >
        <section className="modal-header">
          <h2 id="modal-title">Sequence Broken!</h2>
          <button
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </section>
        <div id="modal-message" className="modal-body">
          <p>Your sequence has been reset. Please try again!</p>
        </div>
        <footer className="modal-footer">
          <button className="modal-close-action" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </dialog>
  );
}

export default Modal;
