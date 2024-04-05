import React, { useState } from 'react';
import Image from 'next/image';
import styles from './input.module.css';
import Error from './Error';
import VALID_CHECK from '@/src/utils/constants/validCheck';
import { Props } from './InputType';
import INPUT_CONTENT from '@/src/utils/constants/inputContent';

const TextForm = ({ kind, onChange, passwordCheck, error }: Partial<Props>) => {
  //이쪽이 타입을 받아서 파라미터 설정하는것
  const [isActive, setIsActive] = useState(true);
  const [currentType, setCurrentType] = useState(INPUT_CONTENT[kind].type);
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(true);
  const [errorType, setErrorType] = useState('');

  //블러 시 정규식에 맞는지 체크
  const checkValidValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    if (value.trim() !== '') {
      if (kind === 'passwordRepeat') {
        if (passwordCheck === value) {
          setIsError(true);
        } else {
          setIsError(false);
          setErrorType('errorGrammar2');
        }
      } else {
        if (VALID_CHECK[kind].isValidCheck.test(value.trim())) {
          setIsError(true);
        } else {
          setIsError(false);
          setErrorType('errorGrammar');
        }
      }
    } else {
      setIsError(false);
      setErrorType('errorNone');
    }
  };

  // 온체인지시 값 적용
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange(value);
  };

  const handleClick = () => {
    currentType === 'password' ? setCurrentType('text') : setCurrentType('password');
    setIsActive(!isActive);
  };

  return (
    <div className={styles.loginBox}>
      <div className={styles.contentHeader}>{INPUT_CONTENT[kind]?.id?.password?.passwordRepeat.title}</div>
      <div className={styles.inputContent}>
        <input
          className={`${styles.inputBox} ${isError ? styles.defaultBorderColor : styles.errorBorderColor}`}
          placeholder={INPUT_CONTENT[kind]?.placeholder}
          type={isActive ? 'text' : 'password'}
          onBlur={checkValidValue}
          onChange={onChangeValue}
          error={isError}></input>
        {kind !== 'id' && (
          <button className={styles.toggleEye} onClick={handleClick}>
            {isActive ? (
              <Image src="/images/eye-on.svg" width={16} height={16} alt="뜬 눈모양 아이콘" />
            ) : (
              <Image src="/images/eye-off.svg" width={16} height={16} alt="감은 눈모양 아이콘" />
            )}
          </button>
        )}
      </div>
      {isError === false && <Error kind={kind} text={errorType} />}
    </div>
  );
};

export default TextForm;
