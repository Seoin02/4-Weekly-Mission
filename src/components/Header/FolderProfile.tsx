import { useState, useEffect } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import { ProfileData } from './Header';
import styles from './Header.module.css'

function FolderProfile({ userData }: { userData?: ProfileData }) {
  const [user, setUser] = useState<ProfileData | null>(null);
  const folderFetchData = async () => {
    try {
      const response = await axiosInstance.get('users/1');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUser(null);
    }
  };
  useEffect(() => {
    folderFetchData();
  }, []);
  return (
    <>
      {user?.data == null ? (
        <div className={styles.headerButton}>
          <button>로그인</button>
        </div>
      ) : (
          <div className={styles.profileArea}>
            <img className={styles.profileImage} src={user?.data[0].image_source} alt="프로필 이미지" />
            <p className={styles.profileEmail}>{user?.data[0].email}</p>
        </div>
      )}
    </>
  );
}
export default FolderProfile;
