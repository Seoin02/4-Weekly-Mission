import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export interface ModalBaseProps {
  modalName?: string;
  onClick?: () => void;
  centerSpace?: React.ReactNode;
  onClose?: () => void;
}

function ModalBase({ modalName, children, onClick, centerSpace, onClose }: PropsWithChildren<ModalBaseProps>) {
  return (
    <div className={styles.modalBase} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className={styles.modalX} onClick={onClose} />
        <p className={styles.modalText}>{modalName}</p>
        <div className={styles.centerSpace}>{centerSpace}</div>
        <button className={styles.modalButton} onClick={onClick}>
          {children}
        </button>
      </div>
    </div>
  );
}

export default ModalBase;
