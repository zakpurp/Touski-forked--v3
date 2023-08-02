import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <button className="text-right" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
