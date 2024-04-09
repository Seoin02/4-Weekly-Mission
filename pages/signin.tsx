import React, { useState } from 'react';
import TextForm from '../src/components/Input/Input';
import styles from '../src/components/Input/input.module.css';
import { StringOrNumber } from '@/src/components/Input/InputType';
import Link from 'next/link';
import Image from 'next/image';
import InputButton from '@/src/components/Input/inputButton';

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
          <Link href="./signup" className={styles.signupLink}>
            회원 가입하기
          </Link>
        </div>
      </div>
      <div className={styles.formBox}>
        <TextForm kind="id" onChange={handleIdChange} />
        <TextForm kind="password" onChange={handlePasswordChange} />
      </div>
      <div className={styles.signupBottom}>
        <InputButton onClick={() => {}}>로그인</InputButton>
        <div className={styles.socialLogin}>
          <span>소셜 로그인</span>
          <div className={styles.socialLoginIcon}>
            <div>
              <Link href="https://www.google.com">
                <Image src="/images/Google.png" width={42} height={42} alt="구글 로그인 아이콘" />
              </Link>
            </div>
            <div>
              <Link href="https://www.kakaocorp.com/page">
                <Image src="/images/Kakaotalk.png" width={42} height={42} alt="카카오톡 로그인 아이콘" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
