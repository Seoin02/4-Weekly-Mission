import React, { useState } from 'react';
import TextForm from '../src/components/Input/Input';
import styles from '../src/components/Input/input.module.css';

export default function Input() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<number>('');

  const handleIdChange = id => {
    setId(id);
  };

  const handlePasswordChange = password => {
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
