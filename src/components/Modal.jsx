import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open ,children,onClose }) {
  const dialog = useRef();

  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
