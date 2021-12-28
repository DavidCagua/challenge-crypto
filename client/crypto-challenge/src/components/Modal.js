import React from "react";
import "./Modal.css";

function Modal({ isOpen, closeModal, children }) {
  return (
    <article className={`Modal ${isOpen && "is-open"}`}>
      <div className="Modal-container">
        <button className="Modal-close" onClick={() => closeModal()}>
          X
        </button>
        {children}
      </div>
    </article>
  );
}

export default Modal;
