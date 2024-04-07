import React, { useState } from 'react';
import TextForm from '../src/components/Input/Input';
import styles from '../src/components/Input/input.module.css';
import { StringOrNumber } from '@/src/components/Input/InputType';

export default function Input() {
  const [id, setId] = useState<StringOrNumber>('');
  const [password, setPassword] = useState<StringOrNumber>();

  const handleIdChange = (id: StringOrNumber) => {
    setId(id);
  };

  const handlePasswordChange = (password: StringOrNumber) => {
    setPassword(password);
  };

  return (
    <div className={styles.inputPage}>
      <TextForm kind="id" onChange={handleIdChange} />
      <TextForm kind="password" onChange={handlePasswordChange} />
      <TextForm kind="passwordRepeat" passwordCheck={password} />
    </div>
  );
}
