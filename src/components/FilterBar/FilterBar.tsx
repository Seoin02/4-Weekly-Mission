import React, { useState, useEffect, useCallback } from 'react';
import styles from './FilterBar.module.css';
import useGetLink from '../apis/useGetLink';
import Card from '../Card/Card';
import DEFAULT_FOLDER from '../../constants/folder';
import { axiosInstance } from '../../utils/axiosInstance';
import DeleteFolderModal from '../Modals/DeleteFolderModal';
import EditNameModal from '../Modals/EditNameModal';
import ShareModal from '../Modals/ShareModal';
import AddFolderModal from '../Modals/AddFolderModal';
import { LinkData } from '../Card/Card';
import Image from 'next/image';

const folderFormatDate: (data: LinkData[]) => { name?: string | number; id?: string | number }[] = data => {
  const formattedFolder = data?.map(({ name, id }) => ({ name, id })) ?? [];
  return [DEFAULT_FOLDER, ...formattedFolder];
};

export default function FilterBar() {
  const [folderId, setFolderId] = useState(DEFAULT_FOLDER.id);
  const [folderData, setFolderData] = useState<
    {
      id?: string | number;
      name?: string | number;
    }[]
  >();
  const [allFolderData, setAllFolderData] = useState<LinkData[] | undefined>();
  const [folderName, setFolderName] = useState(DEFAULT_FOLDER.name);
  const { loading, error, data: linksData } = useGetLink(folderId);

  const [deleteFolderModalOpen, setDeleteFolderModalOpen] = useState(false);
  const [editNameModalOpen, setEditNameModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);

  const handleClose = () => {
    setDeleteFolderModalOpen(false);
    setEditNameModalOpen(false);
    setShareModalOpen(false);
    setAddFolderModalOpen(false);
  };

  const handleChange = (id: string, name: string) => {
    setFolderId(id);
    setFolderName(name);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axiosInstance.get('users/4/folders');
        setFolderData(folderFormatDate(data.data));
        setAllFolderData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className={styles.filterBarArea}>
        <div className={styles.floatingButton}>
          폴더 추가 <Image src="/images/addWhite.svg" width={18} height={18} alt="추가 아이콘" />
        </div>
        {addFolderModalOpen && <AddFolderModal onClose={handleClose} />}
        <div className={styles.filterBar}>
          <div className={styles.filterBarLeft}>
            {!folderData ? (
              <div></div>
            ) : (
              folderData.map(({ id, name }) => (
                <button
                  key={id}
                  className={`${styles.filterBarButton} ${folderId == id ? styles.selected : ''}`}
                  type="button"
                  value={id}
                  onClick={() => {
                    handleChange(String(id), String(name));
                  }}>
                  {name}
                </button>
              ))
            )}
          </div>

          <div className={styles.filterBarRight}>
            <div className={styles.addButton} onClick={() => setAddFolderModalOpen(true)}>
              폴더 추가 <Image src="/images/add.svg" width={16} height={16} alt="추가 아이콘" />
            </div>
            {addFolderModalOpen && <AddFolderModal onClose={handleClose} />}
          </div>
        </div>
        <div className={styles.nameBar}>
          <div className={styles.folderName}>{folderName}</div>
          {folderName !== DEFAULT_FOLDER.name ? (
            <div className={styles.modalButtons}>
              <div className={styles.modalButton} onClick={() => setShareModalOpen(true)}>
                <Image src="/images/share.svg" width={18} height={18} alt="공유 아이콘" />
                <span>공유</span>
              </div>
              {shareModalOpen && <ShareModal onClose={handleClose} />}
              <div className={styles.modalButton} onClick={() => setEditNameModalOpen(true)}>
                <Image src="/images/pen.svg" width={18} height={18} alt="연필 아이콘" />
                <span>이름 변경</span>
              </div>
              {editNameModalOpen && <EditNameModal onClose={handleClose} />}
              <div className={styles.modalButton} onClick={() => setDeleteFolderModalOpen(true)}>
                <Image src="/images/trashbin.svg" width={18} height={18} alt="휴지통 아이콘" />
                <span>삭제</span>
              </div>
              {deleteFolderModalOpen && <DeleteFolderModal onClose={handleClose} />}
            </div>
          ) : null}
        </div>
        <div className={!allFolderData?.length ? '' : styles.cardStyle}>
          {!loading ? <Card folderData={allFolderData} /> : <div>Loading...</div>}
        </div>
      </div>
    </>
  );
}
