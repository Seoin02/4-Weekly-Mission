import { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

function ModalBody({ children }: PropsWithChildren) {
  return <div className={styles.centerSpace}>{children}</div>;
}

export default ModalBody;
