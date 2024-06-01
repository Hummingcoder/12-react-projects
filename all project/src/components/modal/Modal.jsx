import React, { useState } from "react";
import { BsCrosshair } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

const Modal = () => {
  const [showModal, setshowModal] = useState(false);
  const handleOpen = () => {
    setshowModal(true);
  };
  const handleClose = () => {
    setshowModal(false);
  };

  return (
    <div className="w-full bg-pink-600 relative h-screen grid place-content-center">
      <button
        onClick={handleOpen}
        className="border-black border-2 px-6 py-3 bg-white rounded-lg hover:bg-slate-50 active:scale-95"
      >
        Show Modal
      </button>
      {showModal && (
        <div className="w-full animate-showOn absolute h-screen grid place-content-center bg-slate-800/90">
          <div className="bg-white animate-slideDown p-4 relative rounded-lg w-[400px] h-[300px]">
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-lg"
            >
              <IoCloseCircle size={40} />
            </button>
            <div className="w-full h-full text-center pt-24">
              this is a MODAL hehe
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
