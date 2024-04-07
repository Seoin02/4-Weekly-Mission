import { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

interface Props {
  onClick: () => void;
}

function ModalFooter({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <button className={styles.modalButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default ModalFooter;
