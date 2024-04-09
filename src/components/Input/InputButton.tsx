import React, { PropsWithChildren } from 'react';
import styles from '@/src/components/Input/input.module.css';

interface Props {
  onClick: () => void;
}

function InputButton({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <button className={styles.inputButton} type="submit" onClick={onClick}>
      {children}
    </button>
  );
}

export default InputButton;
