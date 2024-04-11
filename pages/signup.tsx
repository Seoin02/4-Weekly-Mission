import React, { useState } from 'react';
import TextForm from '../src/components/Input/Input';
import styles from '../src/components/Input/input.module.css';
import Link from 'next/link';
import Image from 'next/image';
import InputButton from '../src/components/Input/InputButton';

export default function Input() {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordRepeat, setPasswordRepeat] = useState<string>();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(e.target.value);
  };

  return (
    <div className={styles.signupLayout}>
      <div className={styles.signupTitle}>
        <Link href="./signin">
          <Image src="/images/logo.png" width={210} height={38} alt="Linkbrary로고" />
        </Link>
        <div>
          <span className={styles.signupSpan}>이미 회원이신가요? </span>
          <Link href="./signin" className={styles.signupLink}>
            로그인 하기
          </Link>
        </div>
      </div>
      <div className={styles.formBox}>
        <TextForm kind="id" onChange={handleIdChange} />
        <TextForm kind="password" onChange={handlePasswordChange} />
        <TextForm kind="passwordRepeat" onChange={handlePasswordRepeatChange} passwordValue={password} />
      </div>
      <div>
        <InputButton onClick={() => {}}>회원가입</InputButton>
      </div>
    </div>
  );
}
