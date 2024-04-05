import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import styles from './input.module.css';
import Error from './Error';

export interface KindOptions {
  placeholder?: string;
  type?: string;
  error?: string;
  isPassword?: boolean;
}

export interface Props extends KindOptions {
  kind: string;
  type: string;
  onChange: (value: string | number) => void;
  onBlur: Event;
  passwordCheck: string;
  $error: boolean;
}

const TextForm = ({ kind, onChange, passwordCheck, $error }: Partial<Props>) => {
  const content = {
    id: {
      placeholder: '아이디를 입력해주세요.',
      type: 'text',
      error: '아이디가 없습니다.',
      isPassword: false,
    },
    password: {
      placeholder: '비밀번호를 입력해주세요.',
      type: 'password',
      error: '비밀번호가 없습니다.',
      isPassword: true,
    },
    passwordRepeat: {
      placeholder: '비밀번호를 확인해주세요.',
      type: 'password',
      error: '비밀번호가 일치하지 않습니다.',
      isPassword: true,
    },
  };

  //이쪽이 타입을 받아서 파라미터 설정하는것
  const [isActive, setIsActive] = useState(true);
  const [currentType, setCurrentType] = useState(content[kind].type);
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(true);
  const [errorType, setErrorType] = useState('');

  //정규식
  const EMAILPATTERN: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const PASSWORDPATTERN: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/;

  //정규식 타입
  type Check = {
    [key: string]: {
      isValidCheck: RegExp;
    };
  };

  //블러 시 정규식에 맞는지 체크
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        if (CHECK[kind].isValidCheck.test(value.trim())) {
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

  const CHECK: Check = {
    id: {
      isValidCheck: EMAILPATTERN,
    },
    password: {
      isValidCheck: PASSWORDPATTERN,
    },
    passwordRepeat: {
      isValidCheck: PASSWORDPATTERN,
    },
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
      <div className={styles.contentHeader}>{content[kind]?.id?.password?.passwordRepeat.title}</div>
      <div className={styles.inputContent}>
        <input
          className={`${styles.inputBox} ${isError ? styles.defaultBorderColor : styles.errorBorderColor}`}
          placeholder={content[kind]?.placeholder}
          type={isActive ? 'text' : 'password'}
          onBlur={handleCheck}
          onChange={onChangeValue}
          $error={isError}></input>
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
