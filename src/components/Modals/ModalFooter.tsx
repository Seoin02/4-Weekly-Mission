import { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

function ModalFooter({ children, onClick }: { children: PropsWithChildren; onClick: () => void }) {
  return (
    <button className={styles.modalButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default ModalFooter;
