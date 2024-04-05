import { useState } from 'react';
import AddToFolderModal from '../Modals/AddToFolderModal';
import styles from './Section.module.css';
import Image from 'next/image';

function LinkBar() {
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);
  const handleClose = () => {
    setAddToFolderModalOpen(false);
  };

  return (
    <div className={styles.linkAddBar}>
      <div className={styles.linkAddBarText}>
        <Image src="/images/linkIcon.svg" width={16} height={16} alt="링크 추가 아이콘" />
        <input type="text" placeholder="링크를 추가해 보세요" />
      </div>
      <button type="submit" className={styles.linkAddButton} onClick={() => setAddToFolderModalOpen(true)}>
        추가하기
      </button>
      {addToFolderModalOpen && <AddToFolderModal onClose={handleClose} />}
    </div>
  );
}

export default LinkBar;
