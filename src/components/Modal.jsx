// components/Modal.js

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-customBlack-light p-6 rounded shadow-lg flex flex-col gap-3">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl duration-300"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
