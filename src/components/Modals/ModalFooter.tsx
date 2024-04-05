import { PropsWithChildren } from 'react';
import styles from './Modal.module.css';
import type { ModalBaseProps } from './ModalBase';

function ModalFooter({ children, onClick }: PropsWithChildren<ModalBaseProps>) {
  return (
    <button className={styles.modalButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default ModalFooter;
