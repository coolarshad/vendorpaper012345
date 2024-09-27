// Modal.js
import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'; 

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-7xl w-full h-full p-4"> {/* Increased height to h-4/5 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            <FaTimes size={24} /> {/* Using FaTimes icon */}
          </button>
        </div>
        {/* Scrollable Container */}
        <div className="max-h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
