import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getElapsedTime } from '../../utils/getElapsedTime';
import styles from './Card.module.css';
import Link from 'next/link';
import { LinkData } from '../apis/useGetLink';

interface FolderData {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

export interface LinkData {
  id?: string | number;
  name?: string | number;
  created_at: string;
  createdAt?: string;
  url: string;
  image_source?: string;
  imageSource?: string;
  title?: string;
  description?: string;
  owner?: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

const PopoverMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.popoverMenu}>
      <div className={styles.popoverDelete}>삭제하기</div>
      <div className={styles.popoverAddToFolder}>폴더에 추가</div>
    </div>
  );
};

const Card = ({ data, folderData }: { data: LinkData[]; folderData: FolderData[] }) => {
  const [popoverMenuOpen, setPopoverMenuOpen] = useState(false);

  const handleOpenPopoverMenu = () => {
    setPopoverMenuOpen(true);
  };

  const handleClosePopoverMenu = () => {
    setPopoverMenuOpen(false);
  };
  console.log(folderData);

  return (
    <>
      {!data || data.length === 0 ? (
        <div className={styles.mainDefaultText}>저장된 링크가 없습니다.</div>
      ) : (
        data.map(link => (
          <div key={link.id} className={styles.card}>
            <Link href={link.url || ''}>
              <img
                className={styles.cardImage}
                src={
                  link.image_source || link.imageSource ? link.image_source || link.imageSource : '/images/noImage.png'
                }
                alt={link.title}
              />
            </Link>
            <div className={styles.cardTextArea}>
              <div className={styles.uploadTime}>
                <div>{getElapsedTime(link.created_at ?? link.createdAt)} </div>
                <button type="button" key={link.id} onClick={handleOpenPopoverMenu}>
                  <img src="/images/kebab.png" width={21} height={17} alt="팝오버 아이콘" />
                </button>
                {popoverMenuOpen && <PopoverMenu onClose={handleClosePopoverMenu} />}
              </div>
              <Link className={styles.link} href={link?.url || ''}>
                <div className={styles.cardText}>{link.description}</div>
                <div className={styles.uploadDate}>{dayjs(link.created_at || link.createdAt).format('YYYY.MM.DD')}</div>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Card;
