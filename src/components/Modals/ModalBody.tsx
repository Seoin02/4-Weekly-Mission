import { PropsWithChildren } from 'react';
import styles from './Modal.module.css';
import type { ModalBaseProps } from './ModalBase';

function ModalBody({ children }: PropsWithChildren<ModalBaseProps>) {
  return <div className={styles.centerSpace}>{children}</div>;
}

export default ModalBody;
