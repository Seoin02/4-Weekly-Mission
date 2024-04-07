import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.css';
import { ReactNode } from 'react';

function ModalBase({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  return (
    <div className={styles.modalBase} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className={styles.modalX} onClick={onClose} />
        <p className={styles.modalText}>{title}</p>
        {children}
      </div>
    </div>
  );
}

export default ModalBase;
