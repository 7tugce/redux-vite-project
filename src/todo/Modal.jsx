import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../stores/modal";
import modals from "../modals";

const Modal = () => {
  const dispatch = useDispatch();
  const { name, data } = useSelector((state) => state.modal);
  const modal = modals.find((m) => m.name === name);

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-inner">
        <modal.element close={close} data={data} />
      </div>
    </div>
  );
};

export default Modal;
