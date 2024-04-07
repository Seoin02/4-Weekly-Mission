import React, { useState } from 'react';
import TextForm from '../src/components/Input/Input';
import styles from '../src/components/Input/input.module.css';
import { StringOrNumber } from '@/src/components/Input/InputType';

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
    <div className={styles.inputPage}>
      <TextForm kind="id" onChange={handleIdChange} />
      <TextForm kind="password" onChange={handlePasswordChange} />
      <TextForm kind="passwordRepeat" onChange={handlePasswordRepeatChange} passwordCheck={password} />
    </div>
  );
}
