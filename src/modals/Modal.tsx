import React from "react";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}></button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
