import React, { useState } from 'react';
import TextForm from '../src/components/Input/Input';
import styles from '../src/components/Input/input.module.css';
import { StringOrNumber } from '@/src/components/Input/InputType';
import Link from 'next/link';
import Image from 'next/image';

export default function Input() {
  const [id, setId] = useState<StringOrNumber>();
  const [password, setPassword] = useState<StringOrNumber>();

  const handleIdChange = () => {
    setId(id);
  };

  const handlePasswordChange = () => {
    setPassword(password);
  };

  return (
    <div className={styles.signupLayout}>
      <div className={styles.signupTitle}>
        <Link href="./signin">
          <Image src="/images/logo.png" width={210} height={38} alt="Linkbrary로고" />
        </Link>
        <div>
          <span className={styles.signupSpan}>회원이 아니신가요? </span>
          <Link href="./signin" className={styles.signupLink}>
            회원 가입하기
          </Link>
        </div>
      </div>
      <TextForm kind="id" onChange={handleIdChange} />
      <TextForm kind="password" onChange={handlePasswordChange} />
    </div>
  );
}
