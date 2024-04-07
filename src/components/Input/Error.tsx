import styles from './input.module.css';
import { useState, useEffect } from 'react';
import ERROR_TEXT from '@/src/utils/constants/errorText';
import { Key, text } from '@/src/utils/constants/errorText';

const Error = ({ kind, text }: { kind: Key; text: text }) => {
  const [errorText, setErrorText] = useState('');

  const handleErrorText = () => {
    setErrorText(ERROR_TEXT[kind][text]);
  };

  // Error 컴포넌트가 마운트될 때 에러 텍스트 설정
  useEffect(() => {
    handleErrorText();
  }, [kind, text]);

  return (
    <>
      <span className={styles.errorMessage}>{errorText}</span>
    </>
  );
};

export default Error;
