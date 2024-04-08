import React, { useState } from 'react';
import TextForm from '../src/components/Input/Input';
import styles from '../src/components/Input/input.module.css';
import { StringOrNumber } from '@/src/components/Input/InputType';
import Link from 'next/link';
import Image from 'next/image';

export default function Input() {
  const [id, setId] = useState<StringOrNumber>();
  const [password, setPassword] = useState<StringOrNumber>();
  const [passwordRepeat, setPasswordRepeat] = useState<StringOrNumber>();

  const handleIdChange = () => {
    setId(id);
  };

  const handlePasswordChange = () => {
    setPassword(password);
  };

  const handlePasswordRepeatChange = () => {
    setPasswordRepeat(passwordRepeat);
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
      <TextForm kind="id" onChange={handleIdChange} />
      <TextForm kind="password" onChange={handlePasswordChange} />
      <TextForm kind="passwordRepeat" onChange={handlePasswordRepeatChange} passwordCheck={password} />
    </div>
  );
}
