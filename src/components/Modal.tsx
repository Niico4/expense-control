import { CloseIcon } from '@/assets/icons';
import { FC, ReactNode } from 'react';

import Icon from './icon';

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  animateModal?: boolean;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <button
          type="button"
          style={{ all: 'unset', cursor: 'pointer' }}
          onClick={onClose}
        >
          <Icon component={CloseIcon} color="#fff" size={50} />
        </button>
      </div>

      {isOpen && children}
    </div>
  );
};

export default Modal;

