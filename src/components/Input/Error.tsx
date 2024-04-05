import styles from './input.module.css';
import { useState, useEffect } from 'react';
import ERROR_TEXT from '@/src/utils/constants/errorText';

interface Props {
  kind: string;
  text: string;
}

const Error = ({ kind, text }: Props) => {
  const [errorText, setErrorText] = useState('');

  const handleErrorText = () => {
    setErrorText(ERROR_TEXT[kind][text]); // kind와 text props를 이용하여 동적으로 에러 텍스트 설정
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
