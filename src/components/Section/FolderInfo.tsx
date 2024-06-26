import React, { useState, useEffect } from 'react';
import styles from './Section.module.css';
import { axiosInstance } from '../../utils/axiosInstance';
import type { LinkData } from '../apis/useGetLink';

interface FolderInfoProps {
  data?: LinkData;
}

const FolderInfo: React.FC<FolderInfoProps> = () => {
  const [folderData, setFolderData] = useState<LinkData | null>(null);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('sample/folder');
      setFolderData(response.data.folder);
    } catch (error) {
      console.error('Error fetching data:', error);
      setFolderData(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!folderData) return <></>;

  return (
    <>
      {folderData.owner && (
        <div className={styles.titleContent}>
          <img className={styles.titleLogo} src={folderData.owner.profileImageSource} alt="코드잇 로고" />
          <p>{folderData.owner.name}</p>
        </div>
      )}
      <p className={styles.bookmark}>{folderData.name}</p>
    </>
  );
};

export default FolderInfo;
