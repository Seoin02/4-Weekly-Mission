import { useState, useEffect } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import styles from './Header.module.css';

export interface UserData {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

function SharedProfile() {
  const [user, setUser] = useState<UserData | null>(null);
  const sharedFetchData = async () => {
    try {
      const response = await axiosInstance.get('sample/user');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUser(null);
    }
  };
  useEffect(() => {
    sharedFetchData();
  }, []);

  return (
    <>
      {user === null ? (
        <div className={styles.headerButton}>
          <button>로그인</button>
        </div>
      ) : (
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src={user.profileImageSource} alt="프로필 이미지" />
          <p className={styles.profileEmail}>{user.email}</p>
        </div>
      )}
    </>
  );
}

export default SharedProfile;
