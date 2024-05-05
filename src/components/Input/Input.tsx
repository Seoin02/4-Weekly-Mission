import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import styles from './input.module.css';
import Error from './Error';
import VALID_CHECK from '@/src/constants/validCheck';
import INPUT_CONTENT from '@/src/constants/inputContent';
import type { Key } from '@/src/constants/inputContent';

const TextForm = ({
  kind,
  onChange,
  passwordValue,
}: {
  kind: Key;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordValue?: string;
}) => {
  //이쪽이 타입을 받아서 파라미터 설정하는것
  const [isHideValue, setIsHideValue] = useState(true);
  const [currentType, setCurrentType] = useState(INPUT_CONTENT[kind].type);
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorType, setErrorType] = useState('');

  //블러 시 정규식에 맞는지 체크
  const checkValidValue = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    if (value.trim() !== '') {
      if (kind === 'passwordRepeat') {
        if (passwordValue === value) {
          setIsError(false);
        } else {
          setIsError(true);
          setErrorType('errorGrammar');
        }
      } else {
        if (VALID_CHECK[kind].isValidCheck.test(value.trim())) {
          setIsError(true);
        } else {
          setIsError(true);
          setErrorType('errorGrammar');
        }
      }
    } else {
      setIsError(true);
      setErrorType('errorNone');
    }
  };

  // 온체인지시 값 적용
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange(e);
  };

  const handleClick = () => {
    currentType === 'password' ? setCurrentType('text') : setCurrentType('password');
    setIsHideValue(!isHideValue);

    return (
      <div className={styles.loginBox}>
        <div className={styles.contentHeader}>{INPUT_CONTENT[kind].type}</div>
        <div className={styles.inputContent}>
          <input
            className={`${styles.inputBox} ${!isError ? styles.defaultBorderColor : styles.errorBorderColor}`}
            placeholder={INPUT_CONTENT[kind].placeholder}
            type={isHideValue ? 'tIxt' : 'password'}
            onBlur={checkValidValue}
            onChange={onChangeValue}></input>
          {kind !== 'id' && (
            <button className={styles.toggleEye} onClick={handleClick}>
              {isHideValue ? (
                <Image src="/images/eye-on.png" width={16} height={16} alt="뜬 눈모양 아이콘" />
              ) : (
                <Image src="/images/eye-off.png" width={16} height={16} alt="감은 눈모양 아이콘" />
              )}
            </button>
          )}
        </div>
        {isError && <Error kind={kind} text={'errorNone' || 'errorGrammar'} />}
      </div>
    );
  };
};
export default TextForm;
